"use client";
import { Post } from "@/types/post";
import PostCard from "../PostCard/PostCard";
import { usePagination } from "../Pagination/usePagination";
import Pagination from "../Pagination/Pagination";
import { useMemo, useState } from "react";
import Select from "../Select/Select";

interface Props {
    posts: Post[];
}

export default function PostList({ posts }: Props) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredData = useMemo(() => {
        if (selectedCategory === "All") {
            return posts;
        }

        return posts.filter((post) => post.category === selectedCategory);
    }, [selectedCategory, posts]);

    const categories = useMemo(() => {
        return ["All", ...new Set(posts.map((post) => post.category))];
    }, [posts]);

    const { currentData, navigatePage, isDisabled, currentPage, goToPage } =
        usePagination({
            array: filteredData,
            perPage: 8,
        });

    return (
        <div>
            <h2 className="mb-3">Blog Posts</h2>

            <Select
                label="Category"
                options={categories}
                selected={selectedCategory}
                onChange={(option) => {
                    setSelectedCategory(option);
                    goToPage(0);
                }}
                className="mb-3"
            />
            <div className="row">
                {currentData.map((post) => (
                    <div
                        key={post.id}
                        className="col-xl-3 col-md-6 col-sm-12 mb-4"
                    >
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
            <Pagination
                isDisabled={isDisabled}
                onClick={navigatePage}
                currentPage={currentPage}
            />
        </div>
    );
}
