import { TAccount } from "./types";

export const ACCOUNTS: TAccount[] = [
    {
        username: "parent",
        password: "1234",
        permissions: "parent",
    },
    {
        username: "child",
        password: "1234",
        permissions: "child",
    },
];

export const COOKIE_OPTIONS = ["auth"];

export const NAVBAR_OPTIONS = [
    { path: "/quests", label: "Quests" },
    { path: "/invest", label: "Invest" },
    { path: "/goals", label: "Goals" },
];
