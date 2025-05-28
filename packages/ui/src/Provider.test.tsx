import { render, screen } from "@testing-library/react";
import { UIProvider } from "./Provider";

describe("UIProvider", () => {
  it("renders children correctly", () => {
    render(
      <UIProvider>
        <div>Conteúdo de teste</div>
      </UIProvider>
    );

    expect(screen.getByText("Conteúdo de teste")).toBeInTheDocument();
  });
});
