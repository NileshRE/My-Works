import { ReactElement, ReactNode } from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { AxiosProvider } from "../context";

interface DefaultTestProvidersProps {
  children: ReactNode;
}

const DefaultTestProviders = ({ children }: DefaultTestProvidersProps) => (
  <AxiosProvider>{children}</AxiosProvider>
);

export const renderWithProviders = (ui: ReactElement) =>
  render(<DefaultTestProviders>{ui}</DefaultTestProviders>);

export const waitForLoading = async (loadingText = "Fetching") =>
  waitForElementToBeRemoved(() => screen.getByText(`${loadingText}...`));
