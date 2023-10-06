/**
 * The React Fetch method with prefixed API source
 * @param input 
 * @param init 
 * @returns 
 */
export const apiFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(`http://localhost:8000/api/${input}`, init);