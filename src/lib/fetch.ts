export type FetchReturnType<T> =
    | {
          error: null;
          data: T;
      }
    | {
          error: string;
          data: null;
      };

export async function fetchData<T>(
    url: string,
    name: string
): Promise<FetchReturnType<T>> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return {
            data: result,
            error: null,
        };
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Unknown error occurred";
        console.error(message);
        return {
            data: null,
            error: `Failed to fetch ${name}`,
        };
    }
}
