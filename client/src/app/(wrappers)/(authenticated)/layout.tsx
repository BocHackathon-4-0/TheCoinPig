"use client";

import { useCookies } from "@/hooks/useCookies";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [cookies] = useCookies();

    if (cookies.auth === undefined) {
        router.replace("/login");
    }

    return children;
}
