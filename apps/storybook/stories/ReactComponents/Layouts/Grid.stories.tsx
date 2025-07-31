import "@snurls/react/style.css";
import { Grid, GridItem, GridProps } from "@snurls/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<GridProps> = {
  title: "React Components/Layout/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<GridProps>;

export const GridStory: Story = {
  args: {
    as: "div",
    gap: "10px",
    templateRows: "repeat(2, 1fr)",
    templateColumns: "repeat(5, 1fr)",
    color: "blue",
    background: "gray",
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem
        rowSpan={2}
        colSpan={1}
        style={{ backgroundColor: "lightcoral", padding: 10 }}
      >
        rowSpan=2
      </GridItem>
      <GridItem
        colSpan={2}
        style={{ backgroundColor: "lightblue", padding: 10 }}
      >
        colSpan=2
      </GridItem>
      <GridItem
        colSpan={2}
        style={{ backgroundColor: "lightgreen", padding: 10 }}
      >
        colSpan=2
      </GridItem>
      <GridItem
        colSpan={4}
        style={{ backgroundColor: "lightpink", padding: 10 }}
      >
        colSpan=4
      </GridItem>
    </Grid>
  ),
};

export const GridPositionStory: Story = {
  args: {
    as: "div",
    gap: "10px",
    templateRows: "repeat(3, 1fr)",
    templateColumns: "repeat(5, 1fr)",
    color: "blue",
    background: "gray",
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem
        rowStart={1}
        rowEnd={3}
        colStart={1}
        colEnd={2}
        style={{ backgroundColor: "lightcoral", padding: 10 }}
      >
        rowStart=1, rowEnd=3, colStart=1, colEnd=2
      </GridItem>
      <GridItem
        rowStart={1}
        rowEnd={2}
        colStart={2}
        colEnd={4}
        style={{ backgroundColor: "lightblue", padding: 10 }}
      >
        rowStart=1, rowEnd=2, colStart=2, colEnd=4
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={3}
        colStart={2}
        colEnd={5}
        style={{ backgroundColor: "lightgreen", padding: 10 }}
      >
        rowStart=2, rowEnd=3, colStart=2, colEnd=5
      </GridItem>
      <GridItem
        rowStart={3}
        rowEnd={4}
        colStart={1}
        colEnd={5}
        style={{ backgroundColor: "lightpink", padding: 10 }}
      >
        rowStart=3, rowEnd=4, colStart=1, colEnd=5
      </GridItem>
    </Grid>
  ),
};
