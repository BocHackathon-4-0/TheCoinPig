'use client';

import { COOKIE_OPTIONS } from "@/shared/constants";
import { TCookies } from "@/shared/types";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

    const router = useRouter();
    const [cookies] = useCookies<string, TCookies>(COOKIE_OPTIONS);

    if (cookies.auth === undefined) {
        router.replace('/login');
    }

    return children;
}
