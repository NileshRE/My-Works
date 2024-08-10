import "@testing-library/jest-dom";

/**
 * The following can be changed if MSW is not being used
 * i.e. anything involved with using the server
 */
import { server } from "./src/api-mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  vi.clearAllMocks();
});
