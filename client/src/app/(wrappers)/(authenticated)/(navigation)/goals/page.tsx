"use client";

import { useCallback, useMemo, useState } from "react";
import {
    Box,
    Card,
    Container,
    InputAdornment,
    OutlinedInput,
    Stack,
    SvgIcon,
    Typography,
} from "@mui/material";
import { applyPagination } from "@/shared/utils";
import { useSelection } from "@/hooks/useSelection";
import { TGoal } from "@/shared/types";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { GoalsTable } from "@/components/goals-table";
import AddGoalDialog from "@/components/add-goal-dialog";

const data: TGoal[] = [
    {
        id: "1",
        title: "Buy a new car",
        description: "Save up for a new car purchase",
        amount: 30000,
        achieved: false,
    },
    {
        id: "2",
        title: "Travel to Europe",
        amount: 5000,
        achieved: false,
    },
    {
        id: "3",
        title: "Learn a new programming language",
        description: "Master a new language like Python or JavaScript",
        amount: 0,
        achieved: true,
    },
    {
        id: "4",
        title: "Renovate the house",
        description: "Plan and execute a home renovation project",
        amount: 25000,
        achieved: false,
    },
    {
        id: "5",
        title: "Read 50 books",
        description: "Challenge to read 50 books in a year",
        amount: 0,
        achieved: false,
    },
    {
        id: "6",
        title: "Start a side business",
        description: "Launch and grow a successful side business",
        amount: 100,
        achieved: false,
    },
    {
        id: "7",
        title: "Learn to play the piano",
        description: "Take piano lessons and become proficient",
        amount: 120,
        achieved: false,
    },
    {
        id: "8",
        title: "Travel to Asia",
        amount: 800,
        achieved: false,
    },
    {
        id: "9",
        title: "Achieve a promotion at work",
        description: "Work hard to get a promotion within the company",
        amount: 0,
        achieved: false,
    },
    {
        id: "10",
        title: "Complete a marathon",
        amount: 100,
        achieved: false,
    },
    {
        id: "11",
        title: "Volunteer for a charity",
        description: "Dedicate time to volunteer for a charitable organization",
        amount: 100,
        achieved: false,
    },
    {
        id: "12",
        title: "Learn to cook gourmet meals",
        description: "Take cooking classes and become a gourmet chef",
        amount: 0,
        achieved: false,
    },
    {
        id: "13",
        title: "Buy a new house",
        description: "Save up for a down payment on a new home",
        amount: 50000,
        achieved: false,
    },
    {
        id: "14",
        title: "Master a new sport",
        description: "Become proficient in a new sport like golf or tennis",
        amount: 0,
        achieved: false,
    },
    {
        id: "15",
        title: "Learn a new language",
        description: "Speak fluently in a new language",
        amount: 111,
        achieved: false,
    },
    {
        id: "16",
        title: "Travel to Africa",
        amount: 100,
        achieved: false,
    },
    {
        id: "17",
        title: "Complete a coding bootcamp",
        description: "Enroll in and complete a coding bootcamp program",
        amount: 0,
        achieved: false,
    },
    {
        id: "18",
        title: "Start a YouTube channel",
        description: "Create and upload regular content to a YouTube channel",
        amount: 100,
        achieved: false,
    },
    {
        id: "19",
        title: "Become a published author",
        description: "Write and publish a book",
        amount: 100,
        achieved: false,
    },
    {
        id: "20",
        title: "Learn to paint",
        description: "Take art classes and become a skilled painter",
        amount: 1000,
        achieved: false,
    },
];

const useGoals = (data: TGoal[], page: number, rowsPerPage: number) => {
    return useMemo(() => {
        return applyPagination(data, page, rowsPerPage);
    }, [data, page, rowsPerPage]);
};

const useGoalIds = (goals: TGoal[]) => {
    return useMemo(() => {
        return goals.map((goal) => goal.id);
    }, [goals]);
};

const Page = () => {
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredData = useMemo(() => {
        return data.filter((rec) =>
            JSON.stringify(rec).toLowerCase().includes(search.toLowerCase())
        );
    }, [search, data]);

    const goals = useGoals(filteredData, page, rowsPerPage);
    const goalIds = useGoalIds(goals);
    const selection = useSelection(goalIds);

    const handlePageChange = useCallback((_: any, value: any) => {
        setPage(value);
    }, []);

    const handleRowsPerPageChange = useCallback((event: any) => {
        setRowsPerPage(event.target.value);
    }, []);

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
            }}
            className="text-gray-900"
        >
            <Container>
                <Stack spacing={3}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}
                    >
                        <Typography variant="h4">Goals</Typography>
                        <Stack direction="row" spacing={1}>
                            <Card>
                                <OutlinedInput
                                    defaultValue=""
                                    fullWidth
                                    placeholder="Search goals..."
                                    onChange={(e) => setSearch(e.target.value)}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                color="action"
                                                fontSize="small"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    }
                                    sx={{ maxWidth: 500 }}
                                />
                            </Card>
                            <AddGoalDialog
                                callback={(goal) => {
                                    data.push({
                                        ...goal,
                                        id: "1",
                                        achieved: false,
                                    });
                                }}
                            />
                        </Stack>
                    </Stack>
                    <GoalsTable
                        count={data.length}
                        data={goals}
                        onDeselectAll={selection.handleDeselectAll}
                        onDeselectOne={selection.handleDeselectOne}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        onSelectAll={selection.handleSelectAll}
                        onSelectOne={selection.handleSelectOne}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        selected={selection.selected}
                    />
                </Stack>
            </Container>
        </Box>
    );
};

export default Page;
