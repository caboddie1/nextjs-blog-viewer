import { render } from "@testing-library/react";
import { Props } from "./ErrorMessage";
import ErrorMessage from "./ErrorMessage";

function setup(props: Partial<Props> = {}) {
    return render(<ErrorMessage {...props} />);
}

describe("ErrorMessage", () => {
    test("Default message is displayed when message is not provided", () => {
        const { getByText } = setup();

        expect(getByText("Something went wrong")).toBeInTheDocument();
    });

    test("Displays custom message when provided", () => {
        const { getByText } = setup({ message: "Failed to fetch posts" });

        expect(getByText("Failed to fetch posts")).toBeInTheDocument();
    });

    test("Retry button is rendered when onRetry is provided", () => {
        const { getByRole } = setup({ onRetry: () => alert("Retrying...") });

        expect(getByRole("button", { name: "Retry" })).toBeInTheDocument();
    });
});
