import React from "react";

export interface Props {
    message?: string;
    onRetry?: () => void;
    className?: string;
}

export default function ErrorMessage({
    message = "Something went wrong",
    onRetry,
    className = "",
}: Props) {
    return (
        <div
            role="alert"
            className={`alert alert-danger d-flex flex-column align-items-start ${className}`}
        >
            <span>{message}</span>
            {onRetry && (
                <button
                    className="btn btn-sm btn-primary mt-2"
                    onClick={onRetry}
                >
                    Retry
                </button>
            )}
        </div>
    );
}
