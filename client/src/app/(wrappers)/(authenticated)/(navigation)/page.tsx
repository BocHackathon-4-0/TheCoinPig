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
                    <Grid xs={12} lg={8}></Grid>
                    <Grid xs={12} md={6} lg={4}></Grid>
                </Grid>
            </Container>
        </Box>
    );
}
