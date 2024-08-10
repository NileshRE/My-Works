import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { App } from "./app.component";
import { renderWithProviders } from "./shared/util";

const APP_HEADING = "Welcome to the VendorPM Frontend Technical Assessment.";

describe("App", () => {
  test("renders", () => {
    renderWithProviders(<App />);

    expect(
      screen.getByRole("heading", { name: APP_HEADING })
    ).toBeInTheDocument();
  });
});
