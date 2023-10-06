import { OverviewBalance } from "@/components/overview-balance";
import { OverviewInvestments } from "@/components/overview-investments";
import { Box, Container, Grid } from "@mui/material";

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
            }}
        >
            <Container maxWidth="xl">
                <Grid container gap={3} spacing={3}>
                    <Grid xs={12} sm={6} lg={3}>
                        <OverviewBalance sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        <OverviewInvestments sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        {/* <OverviewTasksProgress
                            sx={{ height: "100%" }}
                            value={75.5}
                        /> */}
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        {/* <OverviewTotalProfit
                            sx={{ height: "100%" }}
                            value="$15k"
                        /> */}
                    </Grid>
                    <Grid xs={12} lg={8}>
                        {/* <OverviewSales
                            chartSeries={[
                                {
                                    name: "This year",
                                    data: [
                                        18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18,
                                        20,
                                    ],
                                },
                                {
                                    name: "Last year",
                                    data: [
                                        12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13,
                                        13,
                                    ],
                                },
                            ]}
                            sx={{ height: "100%" }}
                        /> */}
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        {/* <OverviewTraffic
                            chartSeries={[63, 15, 22]}
                            labels={["Desktop", "Tablet", "Phone"]}
                            sx={{ height: "100%" }}
                        /> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
