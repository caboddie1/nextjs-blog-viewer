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
                width={600}
                height={300}
            />
            <div className="card-body d-flex flex-column">
                <span className="badge bg-primary mb-2 align-self-start">
                    {post.category}
                </span>
                <h5 className="card-title text-primary">{post.title}</h5>
                <small className="text-muted">{post.publishedAt}</small>
                <p
                    className="card-text mt-2 text-truncate text-secondary"
                    style={{ maxHeight: "4.5em" }}
                >
                    {post.content}
                </p>
            </div>
        </div>
    );
}
