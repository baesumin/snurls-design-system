import "@snurls/react/style.css";
import { Divider, Box } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";
import { vars } from "@snurls/themes";

const meta: Meta<typeof Divider> = {
  title: "React Components/Layout/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <Box
        padding={3}
        style={{
          width: "300px",
          height: "300px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        boxShadow="xl"
        background="whiteAlpha"
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const DividerStory: Story = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};
