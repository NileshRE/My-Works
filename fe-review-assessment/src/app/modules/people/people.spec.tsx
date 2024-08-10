import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { rest } from "msw";

import { server } from "../../../api-mocks/server";
import { getPeople } from "../../../api-mocks/handlers/people.handler";
import { renderWithProviders, waitForLoading } from "../../shared/util";
import { People } from "./people.component";

const renderPeople = async () => {
  renderWithProviders(<People />);

  await waitForLoading("Fetching People");
};

describe("People", () => {
  test("renders", async () => {
    await renderPeople();

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  test("handles an error response", async () => {
    /**
     * The following can be changed if MSW is not being used
     */
    server.use(
      rest.get(getPeople.info.path, (_, res) => res.networkError("Failure"))
    );
    /****************************************************************************/

    await renderPeople();

    expect(
      screen.getByRole("heading", {
        name: "Oops! looks like something went wrong!",
      })
    ).toBeInTheDocument();
  });

  test("displays an empty state", async () => {
    /**
     * HINT: You need to alter the response from the api
     * You can do so for this test
     */

    server.use(
      rest.get(getPeople.info.path, (_, res, ctx) =>  res(ctx.status(200), ctx.json([])))
    );

    await renderPeople();

    expect(screen.getByText("No People Available.")).toBeInTheDocument();
  });

  test("should display 10 people by default", async () => {
    await renderPeople();

    expect(screen.getByRole("table")).toBeInTheDocument();

    expect(screen.getAllByRole("row").slice(1)).toHaveLength(10);
  });

  describe("Filtering", () => {
    test("should select the sort column", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(
        within(screen.getAllByRole("row")[1]).getByText("Addie Duncan")
      ).toBeInTheDocument();

      expect(
        screen.getByRole("columnheader", { name: "Name" })
      ).toHaveAttribute("aria-sort", "ascending");

      await user.click(screen.getByRole("columnheader", { name: "Name" }));

      expect(
        screen.getByRole("columnheader", { name: "Name" })
      ).toHaveAttribute("aria-sort", "descending");

      expect(
        within(screen.getAllByRole("row")[1]).getByText("Zelma Mcdaniel")
      ).toBeInTheDocument();
    });

    test("should filter the list by peoples name", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      await user.type(screen.getByRole("textbox", { name: "Search" }), "Ball");

      expect(screen.getAllByRole("row").slice(1)).toHaveLength(2);

      expect(
        within(screen.getAllByRole("row")[1]).getByText("Ball Higgins")
      ).toBeInTheDocument();

      expect(
        within(screen.getAllByRole("row")[2]).getByText("Singleton Ball")
      ).toBeInTheDocument();
    });
  });

  describe("Pagination", async () => {
    test("should update number of people displayed", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(screen.getAllByRole("row").slice(1)).toHaveLength(10);

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();

      await user.selectOptions(screen.getByRole("combobox"), "15");

      expect(screen.getAllByRole("row").slice(1)).toHaveLength(15);

      expect(screen.getByText("Showing 1-15 of 100")).toBeInTheDocument();

      await user.selectOptions(screen.getByRole("combobox"), "20");

      expect(screen.getByText("Showing 1-20 of 100")).toBeInTheDocument();

      expect(screen.getAllByRole("row").slice(1)).toHaveLength(20);
    });

    test("should go the next page", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Next" }));

      expect(screen.getByText("Showing 11-20 of 100")).toBeInTheDocument();
    });

    test("should go the previous page", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Next" }));

      expect(screen.getByText("Showing 11-20 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Previous" }));

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();
    });

    test("should go the last page, and not the next page", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Last" }));

      expect(screen.getByText("Showing 91-100 of 100")).toBeInTheDocument();

      expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
      expect(screen.getByRole("button", { name: "Last" })).toBeDisabled();
    });

    test("should go the first page, and not the previous page", async () => {
      const user = userEvent.setup();

      await renderPeople();

      expect(screen.getByRole("table")).toBeInTheDocument();

      expect(screen.getByText("Showing 1-10 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "Last" }));

      expect(screen.getByText("Showing 91-100 of 100")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "First" }));

      expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
      expect(screen.getByRole("button", { name: "First" })).toBeDisabled();
    });
  });
});
