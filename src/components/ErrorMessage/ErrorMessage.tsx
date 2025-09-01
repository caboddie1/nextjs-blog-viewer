import React from "react";

export interface Props {
    message?: string;
    onRetry?: () => void;
}

export default function ErrorMessage({
    message = "Something went wrong",
    onRetry,
}: Props) {
    return (
        <div
            role="alert"
            className="alert alert-danger d-flex flex-column align-items-start"
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
