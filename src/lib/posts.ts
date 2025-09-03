import { Post } from "@/types/post";
import { FetchReturnType } from "@/lib/fetch";

export async function getPosts(): Promise<FetchReturnType<Post[]>> {
    const res = await fetch("/api/posts");

    if (!res.ok) {
        return { data: null, error: "Failed to fetch posts" };
    }

    return res.json();
}
