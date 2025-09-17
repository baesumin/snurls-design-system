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
    padding: 10,
    backgroundColor: "pink",
    justify: "space-between",
    width: 200,
  },
  render: (args) => (
    <Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </Flex>
  ),
};
