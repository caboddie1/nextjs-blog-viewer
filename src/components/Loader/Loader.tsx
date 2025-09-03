import React from "react";

interface Props {
    isLoading: boolean;
    children: React.ReactNode;
}

export default function Loader({ isLoading, children }: Props) {
    return (
        <div>
            {isLoading ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-primary text-center"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
}
