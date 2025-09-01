import { Meta, StoryObj } from "@storybook/nextjs-vite";
import PostCard from "./PostCard";
import { makeMockPost } from "@/mocks/post";

const meta = {
    component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const post = makeMockPost();

export const Primary: Story = {
    args: {
        post,
    },
};
