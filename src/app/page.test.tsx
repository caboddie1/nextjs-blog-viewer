import { render } from "@testing-library/react";
import Page from "@/app/page";

test("Page", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Deploy now")).toBeInTheDocument();
});
