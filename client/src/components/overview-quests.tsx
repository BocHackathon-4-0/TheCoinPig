import SchoolIcon from "@mui/icons-material/School";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    SvgIcon,
    SxProps,
    Theme,
    Typography,
} from "@mui/material";

type TOverviewProps = {
    sx?: SxProps<Theme>;
};

export const OverviewQuests = ({ sx }: TOverviewProps) => {
    const totalQuests = 10;
    const completedQuests = 3;

    return (
        <Card sx={sx}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            className="text-gray-600"
                            variant="overline"
                        >
                            QUESTS PROGRESS
                        </Typography>
                        <Typography variant="h4">
                            {completedQuests}/{totalQuests}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: "orange",
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>
                            <SchoolIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Box sx={{ mt: 3 }}>
                    <LinearProgress
                        value={(completedQuests / totalQuests) * 100}
                        variant="determinate"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
