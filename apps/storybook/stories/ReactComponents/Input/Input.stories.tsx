import "@snurls/react/style.css";
import { Input, InputProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<InputProps> = {
  title: "React Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    isMultiLine: { control: "boolean" },
    height: { control: "number" },
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

type Story = StoryObj<InputProps>;

export const InputStory: Story = {
  args: {
    // size: "56",
    // children: "BUTTON",
    // variant: "solid",
    // isDisabled: false,
    // isLoading: false,
    // leftIcon: "",
    // rightIcon: "",
  },
};

// export const ButtonOutlinedStory: Story = {
//   args: {
//     size: "56",
//     children: "BUTTON",
//     variant: "outline",
//     isDisabled: false,
//     isLoading: false,
//   },
// };

// export const ButtonGoastStory: Story = {
//   args: {
//     size: "48",
//     children: "BUTTON",
//     variant: "ghost",
//     isDisabled: false,
//     isLoading: false,
//   },
// };
