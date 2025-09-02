import { Post } from "@/types/post";
import { fetchData, FetchReturnType } from "./global";

export async function getPosts(): Promise<FetchReturnType<Post[]>> {
    const posts = await fetchData<Post[]>(
        "https://jsonplaceholder.org/posts",
        "posts"
    );
    return posts;
}
