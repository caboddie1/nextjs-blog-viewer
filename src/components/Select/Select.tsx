export interface Props {
    options: string[];
    selected: string;
    onChange: (option: string) => void;
    className?: string;
    label: string;
}

export default function Select({
    options,
    selected,
    onChange,
    className = "",
    label,
}: Props) {
    const selectId = `${label.replaceAll(" ", "-").toLowerCase()}-select`;

    return (
        <div className={`row ${className}`}>
            <div className="col-xl-4 col-12">
                <label
                    className="text-secondary fw-semibold mb-2"
                    htmlFor={selectId}
                >
                    {label}
                </label>
                <select
                    id={selectId}
                    className="form-select"
                    aria-label={`Select a ${label}`}
                    onChange={(e) => onChange(e.target.value)}
                    value={selected}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
