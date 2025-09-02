import { Direction } from "@/types/pagination";

interface Props {
    onClick?: (direction: Direction) => void;
    isDisabled: (direction: Direction) => boolean;
    currentPage: number;
}

export default function Pagination({
    onClick,
    isDisabled,
    currentPage,
}: Props) {
    return (
        <nav
            aria-label="Blog list pagination"
            className="border p-3 mb-2 rounded"
        >
            <ul className="pagination d-flex mb-0 align-items-center">
                <li className="page-item flex-fill">
                    <button
                        className="btn btn-secondary"
                        onClick={() => onClick?.("prev")}
                        disabled={isDisabled("prev")}
                        aria-label="Go to previous page"
                    >
                        Previous
                    </button>
                </li>
                <li className="page-item flex-fill text-center">
                    Page {currentPage + 1}
                </li>
                <li className="page-item flex-fill text-end">
                    <button
                        className="btn btn-secondary"
                        onClick={() => onClick?.("next")}
                        disabled={isDisabled("next")}
                        aria-label="Go to next page"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}
