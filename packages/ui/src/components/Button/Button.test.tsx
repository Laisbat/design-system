import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
