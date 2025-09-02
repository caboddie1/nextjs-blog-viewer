import { Direction } from "@/types/pagination";
import { useMemo, useState } from "react";

interface Props<T> {
    array: T[];
    perPage?: number;
}

export function usePagination<T>({ array, perPage = 10 }: Props<T>) {
    const [currentPage, setCurrentPage] = useState(0);

    const numPages = useMemo(() => {
        return Math.ceil(array.length / perPage);
    }, [array.length, perPage]);

    const currentData = useMemo(() => {
        const startIndex = currentPage * perPage;
        return array.slice(startIndex, startIndex + perPage);
    }, [array, perPage, currentPage]);

    function isDisabled(direction: Direction) {
        if (direction === "prev") {
            return currentPage - 1 < 0;
        }

        return currentPage + 1 >= numPages;
    }

    function navigatePage(direction: Direction) {
        if (isDisabled(direction)) return;
        setCurrentPage(
            (currentState) => (currentState += direction === "next" ? 1 : -1)
        );
    }

    return {
        currentData,
        currentPage,
        navigatePage,
        isDisabled,
    };
}
