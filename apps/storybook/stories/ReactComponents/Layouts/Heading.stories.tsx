import "@snurls/react/style.css";
import { Heading, HeadingProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";
import { classes, vars } from "@snurls/themes";

const meta: Meta<HeadingProps> = {
  title: "React Components/Layout/Typogrpahy/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.heading),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const HeadingStory: Story = {
  args: {
    as: "h1",
    children: "Hello World",
    fontSize: "4xl",
    color: "gray",
  },
};
