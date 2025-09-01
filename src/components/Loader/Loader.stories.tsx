import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Loader from "./Loader";
import PostList from "../PostList/PostList";
import { makeMockPosts } from "@/mocks/post";

const meta = {
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingTrue: Story = {
    args: {
        isLoading: true,
        children: <div>Content</div>,
    },
};

export const LoadingFalse: Story = {
    args: {
        isLoading: false,
        children: <PostList posts={makeMockPosts(10)} />,
    },
};
