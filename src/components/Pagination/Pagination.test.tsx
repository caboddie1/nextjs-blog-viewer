import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationWrapper from "./PaginationWrapper";

describe("Pagination", () => {
    test("Can navigate between pages and correct data is shown", async () => {
        const { getByText, queryByText } = render(<PaginationWrapper />);

        expect(getByText("Page 1")).toBeInTheDocument();
        expect(getByText("Item 1")).toBeInTheDocument();
        expect(queryByText("Item 11")).not.toBeInTheDocument();

        await userEvent.click(getByText("Next"));

        await waitFor(() => {
            expect(getByText("Page 2")).toBeInTheDocument();
            expect(getByText("Item 11")).toBeInTheDocument();
            expect(queryByText("Item 1")).not.toBeInTheDocument();
        });
    });

    test("perPage props increases items rendered per page", () => {
        const { getByText } = render(<PaginationWrapper perPage={20} />);

        expect(getByText("Item 20")).toBeInTheDocument();
    });

    test("Next and previous buttons are disabled before array goes out of range", async () => {
        const { getByText } = render(<PaginationWrapper />);

        expect(getByText("Previous")).toBeDisabled();

        for (let i = 0; i < 10; i++) {
            await userEvent.click(getByText("Next"));
        }

        expect(getByText("Next")).toBeDisabled();
    });

    test("Last page is not skipped when array.length % perPage !== 0", async () => {
        const { getByText } = render(
            <PaginationWrapper perPage={5} dataLen={11} />
        );

        for (let i = 0; i < 3; i++) {
            await userEvent.click(getByText("Next"));
        }

        expect(getByText("Item 11")).toBeInTheDocument();
    });
});
