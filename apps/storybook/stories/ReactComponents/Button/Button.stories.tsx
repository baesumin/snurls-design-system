import "@snurls/react/style.css";
import {
  Button,
  ButtonProps,
  Text,
  useButton,
  useToggleButton,
} from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";
import { vars } from "@snurls/themes";

const meta: Meta<typeof Button> = {
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

export const TextButtonStory: Story = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};

export const ToggleButtonStory: Story = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      { elementType: "button" },
      false,
    );

    return (
      <Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </Button>
    );
  },
};
