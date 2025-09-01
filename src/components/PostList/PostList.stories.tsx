import { Meta, StoryObj } from "@storybook/nextjs-vite";
import PostList from "./PostList";
import { makeMockPosts } from "@/mocks/post";

const meta = {
    component: PostList,
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

const posts = makeMockPosts(30);

export const Primary: Story = {
    args: {
        posts,
    },
};
