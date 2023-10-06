/**
 * The React Fetch method with prefixed API source
 * @param input
 * @param init
 * @returns
 */
export const apiFetch = (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
) => fetch(`http://localhost:8000/api/${input}`, init);

export function getInitials(inputString: string): string {
    const words = inputString.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join("");
}
