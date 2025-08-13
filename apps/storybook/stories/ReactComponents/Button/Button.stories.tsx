import "@snurls/react/style.css";
import { Button, ButtonProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "React Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["56", "48", "40"],
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
    color: {
      control: "color",
    },
    width: {
      control: "number",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 335,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const ButtonStory: Story = {
  args: {
    size: "56",
    children: "BUTTON",
    variant: "solid",
    isDisabled: false,
    isLoading: false,
    leftIcon: "",
    rightIcon: "",
  },
};

export const ButtonOutlinedStory: Story = {
  args: {
    size: "56",
    children: "BUTTON",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
  },
};

export const ButtonGoastStory: Story = {
  args: {
    size: "48",
    children: "BUTTON",
    variant: "ghost",
    isDisabled: false,
    isLoading: false,
  },
};
