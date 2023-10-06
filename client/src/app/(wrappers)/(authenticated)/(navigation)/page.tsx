import { OverviewBalance } from "@/components/overview-balance";
import { OverviewGoals } from "@/components/overview-goals";
import { OverviewInvestments } from "@/components/overview-investments";
import { OverviewQuests } from "@/components/overview-quests";
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
            <Container>
                <Grid container gap={2}>
                    <Grid xs={12} sm>
                        <OverviewBalance sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewInvestments sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewQuests sx={{ height: "100%" }} />
                    </Grid>
                    <Grid xs={12} sm>
                        <OverviewGoals sx={{ height: "100%" }} />
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
