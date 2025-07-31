import "@snurls/react/style.css";
import { Flex, FlexProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<FlexProps> = {
  title: "React Components/Layout/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<FlexProps>;

export const FlexStory: Story = {
  args: {
    as: "div",
    padding: 5,
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </Flex>
  ),
};
