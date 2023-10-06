"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ACCOUNTS } from "@/shared/constants";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { useCookies } from "@/hooks/useCookies";

export default function Login() {
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const [_, setCookie] = useCookies();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const username = data.get("username");
        const password = data.get("password");

        const account = ACCOUNTS.find(
            (account) => account.username === username
        );

        if (account === undefined || account.password !== password) {
            enqueueSnackbar("Invalid details!", { variant: "error" });
            event.currentTarget.reset();
            return;
        }

        setCookie("auth", account);
        router.push("/");
    };

    return (
        <Container
            component="div"
            sx={{ backgroundColor: "white", height: "100%", width: "100%" }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    className="text-gray-900"
                >
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
