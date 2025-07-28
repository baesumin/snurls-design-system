import { Box, BoxProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BoxProps> = {
  title: "React Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<BoxProps>;

// export const BoxStory: Story = {
//   args: {
//     as: "button",
//     style: {
//       borderRadius: "md",
//       boxShadow: "xl",
//       padding: 5,
//       background: "pink",
//     },
//   },
// };
export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
