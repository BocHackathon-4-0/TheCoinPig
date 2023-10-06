"use client";

import NavBar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="flex-1 overflow-hidden">{children}</div>
        </div>
    );
}
