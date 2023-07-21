import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import Homepage from "../app/page";

jest.mock("../lib/ApolloClient", () => ({
  getClient: jest.fn(() => ({
    query: jest.fn(() => {
      const data = {
        allTrails: [
          {
            __typename: "Trail",
            id: "blue-bird",
            name: "Blue Bird",
            status: "OPEN",
            difficulty: "intermediate",
          },
        ],
      };
      return { data };
    }),
  })),
}));

test("shows suspense boundary and resolves with data in async component (RSC)", async () => {
  render(await Homepage());

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText("Blue Bird")).toBeInTheDocument()
  );
});
