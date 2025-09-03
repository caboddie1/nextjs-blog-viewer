import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Select, { Props } from "./Select";
import { useState } from "react";

function SelectWrapper(props: Omit<Props, "onChange">) {
    const [selected, setSelected] = useState(props.selected);

    return <Select {...props} selected={selected} onChange={setSelected} />;
}

const meta = {
    component: SelectWrapper,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        options: [
            "All",
            ...Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`),
        ],
        label: "Category",
        selected: "All",
    },
};
