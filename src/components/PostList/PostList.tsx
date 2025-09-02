"use client";
import { Post } from "@/types/post";
import PostCard from "../PostCard/PostCard";
import { usePagination } from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";

interface Props {
    posts: Post[];
}

export default function PostList({ posts }: Props) {
    const { currentData, navigatePage, isDisabled, currentPage } =
        usePagination({
            array: posts,
            perPage: 8,
        });

    return (
        <div className="row">
            <h2 className="mb-3">Blog Posts</h2>
            {currentData.map((post) => (
                <div key={post.id} className="col-xl-3 col-md-6 col-sm-12 mb-4">
                    <PostCard post={post} />
                </div>
            ))}
            <Pagination
                isDisabled={isDisabled}
                onClick={navigatePage}
                currentPage={currentPage}
            />
        </div>
    );
}
