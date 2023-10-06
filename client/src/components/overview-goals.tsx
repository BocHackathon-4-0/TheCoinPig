import FlagIcon from "@mui/icons-material/Flag";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
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

export const OverviewGoals = ({ sx }: TOverviewProps) => {
    const balance = 100;
    const amountToNextGoal = 600;
    const nextGoalLabel = "iPhone 15";

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
                            ROAD TO NEXT GOAL
                        </Typography>
                        <Typography variant="h4">
                            {amountToNextGoal} to go
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: "red",
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>
                            <FlagIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Grid
                    container
                    direction="row"
                    gap={1}
                    spacing={1}
                    sx={{ mt: 3 }}
                >
                    <Grid item>
                        <Typography className="text-gray-600" variant="caption">
                            {nextGoalLabel}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <LinearProgress
                            value={
                                (balance / (balance + amountToNextGoal)) * 100
                            }
                            variant="determinate"
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
