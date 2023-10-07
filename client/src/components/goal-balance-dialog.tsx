"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { useCookies } from "@/hooks/useCookies";
import { apiFetch } from "@/shared/utils";
import { useState } from "react";

type TGoalBalanceDialog = {
    goalId: string;
    goalTitle: string;
    callback: () => void;
};

export default function GoalBalanceDialog({
    goalId,
    goalTitle,
    callback,
}: TGoalBalanceDialog) {
    const { enqueueSnackbar } = useSnackbar();
    const [cookies] = useCookies();
    const [amount, setAmount] = useState<number>();

    const handleSave = async (isAddition: boolean) => {
        if (amount !== undefined) {
            console.log({ amount: Number(amount) });
            await apiFetch(
                `goals/${isAddition ? "addBalance" : "withdrawBalance"}/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid: cookies.auth?.uid,
                        goal_id: goalId,
                        amount: Number(amount),
                    }),
                }
            );
            callback();
        } else {
            enqueueSnackbar("Invalid data!", { variant: "error" });
        }
    };

    return (
        <Dialog open={true} onClose={callback} maxWidth="sm" fullWidth>
            <Box className="w-full h-full" component="form">
                <DialogTitle>Move balance for {goalTitle}</DialogTitle>
                <DialogContent sx={{ paddingTop: 4 }}>
                    <TextField
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        autoFocus
                        name="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleSave(false)}>Withdraw</Button>
                    <div className="flex-grow" />
                    <Button onClick={() => handleSave(true)}>Add</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
