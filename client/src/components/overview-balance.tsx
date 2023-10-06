import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
    Avatar,
    Card,
    CardContent,
    Stack,
    SvgIcon,
    SxProps,
    Theme,
    Typography,
} from "@mui/material";

type TOverviewProps = {
    sx: SxProps<Theme>;
};

export const OverviewBalance = ({ sx }: TOverviewProps) => {
    const balance = 100;
    const difference = 12;
    const isDifferencePositive = difference >= 0;

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
                            BALANCE
                        </Typography>
                        <Typography variant="h4">{balance}</Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: "gold",
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>
                            <AttachMoneyIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {difference && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={0.5}
                        >
                            <SvgIcon
                                color={difference ? "success" : "error"}
                                fontSize="small"
                            >
                                {isDifferencePositive ? (
                                    <ArrowUpwardIcon />
                                ) : (
                                    <ArrowDownwardIcon />
                                )}
                            </SvgIcon>
                            <Typography
                                color={isDifferencePositive ? "green" : "red"}
                                variant="body2"
                            >
                                {difference}%
                            </Typography>
                        </Stack>
                        <Typography className="text-gray-600" variant="caption">
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};
