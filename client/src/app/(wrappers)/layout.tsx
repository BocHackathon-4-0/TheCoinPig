"use client";

import "@fontsource/comfortaa";
import "@fontsource/comfortaa/300.css";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/600.css";
import "@fontsource/comfortaa/700.css";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        setTheme(
            createTheme({
                typography: {
                    fontFamily: "Comfortaa",
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                },
            })
        );
    }, []);

    if (theme === null) return <></>;

    return (
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
            <SnackbarProvider>
                <ThemeProvider theme={theme}>
                    <div className="bg-white w-full h-full">{children}</div>
                </ThemeProvider>
            </SnackbarProvider>
        </CookiesProvider>
    );
}
