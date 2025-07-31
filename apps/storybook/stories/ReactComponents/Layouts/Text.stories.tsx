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
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const TextStory: Story = {
  args: {
    as: "p",
    children: "Hello World",
    fontSize: "xl",
    color: "gray",
    background: "blue",
  },
};
