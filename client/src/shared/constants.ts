import { TAccount } from "./types";

export const ACCOUNTS: TAccount[] = [
    {
        username: 'parent',
        password: '1234',
        permissions: 'parent',
    },
    {
        username: 'child',
        password: '1234',
        permissions: 'child',
    },
];

export const COOKIE_OPTIONS = ['auth'];