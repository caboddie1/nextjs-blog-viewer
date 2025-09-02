import Pagination from "./Pagination";
import { usePagination } from "./usePagination";

interface Props {
    dataLen?: number;
    perPage?: number;
}

export default function PaginationWrapper({
    dataLen = 100,
    perPage = 10,
}: Props) {
    const array = Array.from({ length: dataLen }, (_, i) => `Item ${i + 1}`);
    const { currentData, isDisabled, navigatePage, currentPage } =
        usePagination({ array, perPage });

    return (
        <div>
            <ul>
                {currentData.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Pagination
                isDisabled={isDisabled}
                onClick={navigatePage}
                currentPage={currentPage}
            />
        </div>
    );
}
