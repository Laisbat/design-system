import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { baseTheme } from "../../theme";
import { Button } from "./index";

describe("Button", () => {
  it("renders with children", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Button>Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

test("renders with children", () => {
  const { container } = render(<Button>Test</Button>);
  console.log(container.innerHTML); // veja o que está sendo gerado
});
