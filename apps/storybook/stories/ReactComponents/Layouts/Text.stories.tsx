import "@snurls/react/style.css";
import { TextProps, Text } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";
import { classes, vars } from "@snurls/themes";

const meta: Meta<TextProps> = {
  title: "React Components/Layout/Typogrpahy/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    variant: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const TextStory: Story = {
  args: {
    as: "p",
    children: "반복되는 노력 기울이다",
    variant: "body1",
  },
};
