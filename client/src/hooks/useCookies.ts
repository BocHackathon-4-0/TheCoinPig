import { COOKIE_OPTIONS } from "@/shared/constants";
import { TCookies } from "@/shared/types";
import { useCookies as useExternalCookies } from "react-cookie";

export const useCookies = () =>
    useExternalCookies<string, TCookies>(COOKIE_OPTIONS);
