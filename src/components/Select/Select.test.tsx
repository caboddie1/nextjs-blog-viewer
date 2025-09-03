import { render } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
    test("onChange is called when option is changed", async () => {
        const onChange = vi.fn();
        const { getByRole } = render(
            <Select
                options={Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)}
                selected="Item 1"
                label="Category"
                onChange={onChange}
            />
        );

        await userEvent.selectOptions(
            getByRole("combobox"),
            getByRole("option", { name: "Item 4" })
        );

        expect(onChange).toBeCalledWith("Item 4");
        expect(onChange).toBeCalledTimes(1);
    });
});
