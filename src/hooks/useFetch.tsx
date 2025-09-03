import { FetchReturnType } from "@/lib/fetch";
import { useCallback, useEffect, useState } from "react";

interface Props {
    url: string;
    name: string;
}

interface ReturnType<T> {
    loading: boolean;
    error: null | string;
    data: T | null;
    fetchData: () => Promise<void>;
}

export function useFetch<T>({ url, name }: Props): ReturnType<T> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<null | T>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setData(null);
        setError(null);
        const res = await fetch(url);

        if (!res.ok) {
            setError(`Failed to fetch ${name}`);
            setLoading(false);
            return;
        }

        const json: FetchReturnType<T> = await res.json();
        if (!json.data) {
            setError(json.error);
        } else {
            setData(json.data);
        }
        setLoading(false);
    }, [url, name]);

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [fetchData]);

    return { loading, error, data, fetchData };
}
