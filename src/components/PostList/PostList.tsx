import { Post } from "@/types/post";
import PostCard from "../PostCard/PostCard";

interface Props {
    posts: Post[];
}

export default function PostList({ posts }: Props) {
    return (
        <div className="row">
            <h2 className="mb-3">Blog Posts</h2>
            {posts.map((post) => (
                <div key={post.id} className="col-xl-3 col-md-6 col-sm-12 mb-4">
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}
