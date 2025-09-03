import { useState } from "react";
import Loader from "./Loader";
import PostList from "../PostList/PostList";
import { makeMockPosts } from "@/mocks/post";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const posts = makeMockPosts(20);

function TestWrapper() {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <button onClick={() => setLoading((state) => !state)}>
                Toggle Loading
            </button>
            <Loader isLoading={loading}>
                <PostList posts={posts} />
            </Loader>
        </div>
    );
}

describe("Loader", () => {
    test("Loading spinner only displays when isLoading is set to true", async () => {
        const { getByText, queryByRole } = render(<TestWrapper />);

        expect(queryByRole("status")).toBeInTheDocument();

        await userEvent.click(getByText("Toggle Loading"));

        expect(queryByRole("status")).not.toBeInTheDocument();
        expect(getByText("Example Blog Post 1")).toBeInTheDocument();
    });
});
