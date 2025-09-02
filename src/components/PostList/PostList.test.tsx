import { makeMockPosts } from "@/mocks/post";
import PostList from "./PostList";
import { render } from "@testing-library/react";

describe("PostList", () => {
    test("Loads and displays posts", () => {
        const posts = makeMockPosts(30);
        const { getByText } = render(<PostList posts={posts} />);

        expect(getByText("Example Blog Post 1")).toBeInTheDocument();
        expect(getByText("Example Blog Post 3")).toBeInTheDocument();
        expect(getByText("Example Blog Post 8")).toBeInTheDocument();
    });
});
