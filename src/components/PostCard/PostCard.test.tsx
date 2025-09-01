import { makeMockPost } from "@/mocks/post";
import PostCard from "./PostCard";
import { render } from "@testing-library/react";

describe("Post Card", () => {
    test("Loads and displays post", () => {
        const post = makeMockPost();
        const { getByText } = render(<PostCard post={post} />);

        expect(getByText(post.title)).toBeInTheDocument();
        expect(getByText(post.category)).toBeInTheDocument();
    });
});
