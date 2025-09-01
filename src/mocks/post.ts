import { Post } from "@/types/post";

export function makeMockPost(overrides: Partial<Post> = {}): Post {
    return {
        id: overrides.id ?? 1,
        slug: overrides.slug ?? "example-post",
        url: overrides.url ?? "/posts/example-post",
        title: overrides.title ?? "Example Blog Post",
        content: overrides.content ?? "This is some example content.",
        image:
            overrides.image ??
            "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
        thumbnail: overrides.thumbnail ?? "/images/example-thumb.jpg",
        status: overrides.status ?? "published",
        category: overrides.category ?? "Tech",
        publishedAt: overrides.publishedAt ?? "2024-01-01T00:00:00Z",
        updatedAt: overrides.updatedAt ?? "2024-01-02T00:00:00Z",
        userId: overrides.userId ?? 123,
    };
}

export function makeMockPosts(count = 3): Post[] {
    return Array.from({ length: count }, (_, i) =>
        makeMockPost({
            id: i + 1,
            slug: `post-${i + 1}`,
            title: `Example Blog Post ${i + 1}`,
        })
    );
}
