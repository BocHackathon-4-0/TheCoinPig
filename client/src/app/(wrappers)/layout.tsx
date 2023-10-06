'use client';

import { ThemeProvider, createTheme, Theme } from "@mui/material";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        setTheme(createTheme({  }));
    }, []);

    if (theme === null) return <></>;

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
