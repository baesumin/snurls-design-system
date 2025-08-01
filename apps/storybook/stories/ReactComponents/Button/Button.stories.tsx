import "@snurls/react/style.css";
import { Button, ButtonProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";
import { vars } from "@snurls/themes";

const meta: Meta<ButtonProps> = {
  title: "React Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const ButtonStory: Story = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};
