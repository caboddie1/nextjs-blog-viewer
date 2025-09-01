import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ErrorMessage from "./ErrorMessage";

const meta = {
    component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingTrue: Story = {
    args: {
        message: "Unable to load posts",
    },
};

export const LoadingFalse: Story = {
    args: {
        message: "Failed to fetch posts",
        onRetry: () => alert("Retrying..."),
    },
};
