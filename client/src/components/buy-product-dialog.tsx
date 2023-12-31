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
import { apiFetch } from "@/shared/utils";
import { useCookies } from "@/hooks/useCookies";

type TBuyProductDialog = {
    productId: string;
    productName: string;
    callback: () => any;
};

export default function BuyProductDialog({
    productId,
    productName,
    callback,
}: TBuyProductDialog) {
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [cookies] = useCookies();

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const amount = data.get("amount");

        console.log({ amount });

        if (amount !== null) {
            await apiFetch("investments/createInvestment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid: cookies.auth?.uid,
                    product_id: productId,
                    amount: Number(amount),
                }),
            });
            await callback();
            setOpen(false);
        } else {
            enqueueSnackbar("Invalid data!", { variant: "error" });
        }
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Invest
            </button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <Box
                    className="w-full h-full"
                    component="form"
                    onSubmit={handleSave}
                >
                    <DialogTitle>Invest in {productName}</DialogTitle>
                    <DialogContent sx={{ paddingTop: 4 }}>
                        <TextField
                            autoFocus
                            name="amount"
                            label="Amount"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}
