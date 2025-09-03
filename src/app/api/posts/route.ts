import { fetchData } from "@/lib/fetch";
import { Post } from "@/types/post";
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await fetchData<Post[]>(
        "https://jsonplaceholder.org/posts",
        "posts"
    );
    return NextResponse.json(posts);
}
