"use client";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import PostList from "@/components/PostList/PostList";
import { Post } from "@/types/post";
import Loader from "@/components/Loader/Loader";
import { useFetch } from "@/hooks/useFetch";

export default function Home() {
    const { loading, data, error, fetchData } = useFetch<Post[]>({
        url: "/api/posts",
        name: "posts",
    });

    function onErrorRetryCallback() {
        fetchData().catch(console.error);
    }

    return (
        <section>
            <h1 className="text-primary">Next JS Blog Viewer</h1>
            <Loader isLoading={loading}>
                {error ? (
                    <ErrorMessage
                        message={error}
                        onRetry={onErrorRetryCallback}
                    />
                ) : (
                    <>{data && <PostList posts={data} />}</>
                )}
            </Loader>
        </section>
    );
}
