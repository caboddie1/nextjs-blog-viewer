import { Meta, StoryObj } from "@storybook/nextjs-vite";
import PaginationWrapper from "./PaginationWrapper";

const meta = {
    component: PaginationWrapper,
    title: "Components/Pagination",
} satisfies Meta<typeof PaginationWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const CustomPerPage: Story = {
    args: {
        perPage: 5,
        dataLen: 11,
    },
};
