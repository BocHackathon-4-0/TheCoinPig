'use client';

import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        setTheme(createTheme());
    }, []);

    if (theme === null) return <></>;

    return (
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <SnackbarProvider>
                <ThemeProvider theme={theme}>
                    <div className="bg-white w-full h-full">
                        {children}
                    </div>
                </ThemeProvider>
            </SnackbarProvider>
        </CookiesProvider>
    );
}
