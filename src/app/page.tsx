import { getPosts } from "@/api/posts";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import PostList from "@/components/PostList/PostList";

export default async function Home() {
    const posts = await getPosts();

    return (
        <section>
            <h1 className="text-primary">Next JS Blog Viewer</h1>
            {posts.data ? (
                <PostList posts={posts.data} />
            ) : (
                <ErrorMessage message={posts.error} />
            )}
        </section>
    );
}
