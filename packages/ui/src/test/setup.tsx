// src/test/setup.tsx
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import { baseTheme } from "../theme";

afterEach(() => {
  cleanup();
});

vi.mock("@testing-library/react", async () => {
  const actual = await vi.importActual<typeof import("@testing-library/react")>(
    "@testing-library/react"
  );

  return {
    ...actual,
    render: (ui, options) =>
      actual.render(
        <ThemeProvider theme={baseTheme}>
          <CssBaseline />
          {ui}
        </ThemeProvider>,
        options
      ),
  };
});
