import {
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { TGoal } from "@/shared/types";
import { ChangeEventHandler, MouseEvent, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import GoalBalanceDialog from "./goal-balance-dialog";

type TGoalsTableProps = {
    count: number;
    data: TGoal[];
    onDeselectAll: () => void;
    onDeselectOne: (item: string) => void;
    onSelectAll: () => void;
    onSelectOne: (item: string) => void;
    onPageChange: (
        event: MouseEvent<HTMLButtonElement> | null,
        page: number
    ) => void;
    onRowsPerPageChange: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    >;
    page: number;
    rowsPerPage: number;
    selected: string[];
};

export const GoalsTable = (props: TGoalsTableProps) => {
    const {
        count = 0,
        data = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => {},
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = [],
    } = props;

    const selectedSome = selected.length > 0 && selected.length < data.length;
    const selectedAll = data.length > 0 && selected.length === data.length;

    const [goalToMoveBalance, setGoalToMoveBalance] = useState<TGoal>();

    return (
        <>
            <Card sx={{ borderRadius: 3 }}>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedAll}
                                        indeterminate={selectedSome}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                onSelectAll?.();
                                            } else {
                                                onDeselectAll?.();
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Current Balance</TableCell>
                                <TableCell>Target Balance</TableCell>
                                <TableCell>Achieved</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((goal) => {
                                const isSelected = selected.includes(goal.id);

                                return (
                                    <TableRow
                                        hover
                                        key={goal.id}
                                        selected={isSelected}
                                        onClick={() =>
                                            setGoalToMoveBalance(goal)
                                        }
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(goal.id);
                                                    } else {
                                                        onDeselectOne?.(
                                                            goal.id
                                                        );
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>{goal.title}</TableCell>
                                        <TableCell>
                                            {goal.description ?? ""}
                                        </TableCell>
                                        <TableCell>
                                            {goal.currentBalance}
                                        </TableCell>
                                        <TableCell>
                                            {goal.targetBalance}
                                        </TableCell>
                                        <TableCell>
                                            {goal.achieved ? (
                                                <DoneIcon color="success" />
                                            ) : (
                                                <CloseIcon color="error" />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
                <TablePagination
                    component="div"
                    count={count}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
            {goalToMoveBalance !== undefined && (
                <GoalBalanceDialog
                    goalId={goalToMoveBalance.id}
                    goalTitle={goalToMoveBalance.title}
                    callback={() => setGoalToMoveBalance(undefined)}
                />
            )}
        </>
    );
};
