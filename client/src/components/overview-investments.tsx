import HappyIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SadIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ShowChartIcon from "@mui/icons-material/ShowChart";
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
    sx?: SxProps<Theme>;
};

export const OverviewInvestments = ({ sx }: TOverviewProps) => {
    const investedAmount: number = 50;
    const investmentProductsAmount: number = 3;
    const hasInvestmentProducts: boolean = investmentProductsAmount > 0;

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
                            ACTIVE INVESTMENTS
                        </Typography>
                        <Typography variant="h4">{investedAmount}</Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: "blue",
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>
                            <ShowChartIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {investmentProductsAmount && (
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
                                color={
                                    hasInvestmentProducts ? "success" : "error"
                                }
                                fontSize="small"
                            >
                                {hasInvestmentProducts ? (
                                    <HappyIcon />
                                ) : (
                                    <SadIcon />
                                )}
                            </SvgIcon>
                            <Typography
                                color={hasInvestmentProducts ? "green" : "red"}
                                variant="body2"
                            >
                                {investmentProductsAmount}
                            </Typography>
                        </Stack>
                        <Typography className="text-gray-600" variant="caption">
                            Investment Products
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};
