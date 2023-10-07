import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TGoal } from "@/shared/types";
import { Box, Grid, SvgIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSnackbar } from "notistack";

type TAddGoalDialogProps = {
    callback: (
        goal: Partial<Omit<TGoal, "id" | "achieved"> & { amount: number }>
    ) => Promise<void> | void;
};

export default function AddGoalDialog({ callback }: TAddGoalDialogProps) {
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const title = data.get("title");
        const description = data.get("description");
        const amount = Number(data.get("amount"));

        console.log({ title, description, amount });

        if (
            typeof title === "string" &&
            (description === null || typeof description === "string") &&
            typeof amount === "number"
        ) {
            await callback({
                title,
                description: description ?? undefined,
                amount,
            });
            setOpen(false);
        } else {
            enqueueSnackbar("Invalid data!", { variant: "error" });
        }
    };

    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                startIcon={
                    <SvgIcon fontSize="small">
                        <AddIcon />
                    </SvgIcon>
                }
                variant="contained"
                sx={{ height: "100%" }}
            >
                Add
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box
                    className="w-full h-full"
                    component="form"
                    onSubmit={handleSave}
                >
                    <DialogTitle>Add Goal</DialogTitle>
                    <DialogContent>
                        <Grid container direction="row" gap={2} spacing={2}>
                            <Grid item xs={8}>
                                <TextField
                                    autoFocus
                                    name="title"
                                    label="Title"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    autoFocus
                                    name="amount"
                                    label="Amount"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    name="description"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
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
