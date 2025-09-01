import { Post } from "@/types/post";
import Image from "next/image";
import React from "react";

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <div className="card h-100 shadow-sm">
            <Image
                src={post.image}
                className="img-fluid rounded-top"
                alt={post.title}
                width={400}
                height={200}
            />

            <div className="card-body d-flex flex-column">
                <span className="badge bg-primary mb-2 align-self-start">
                    {post.category}
                </span>

                <h5 className="card-title">
                    <a
                        href={`/posts/${post.slug}`}
                        className="stretched-link text-decoration-none"
                    >
                        {post.title}
                    </a>
                </h5>

                <small className="text-muted">
                    {new Date(post.publishedAt).toLocaleDateString()}
                </small>

                <p
                    className="card-text mt-2 text-truncate"
                    style={{ maxHeight: "4.5em" }}
                >
                    {post.content}
                </p>
            </div>
        </div>
    );
}
