import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button color="primary">Botão</Button>;
export const Secondary = () => <Button color="secondary">Outro</Button>;
