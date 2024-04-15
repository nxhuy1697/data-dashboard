import SideMenu from "@/components/SideMenu";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Dashboard = () => {
  return (
    <>
   {/* <SideMenu /> */}
    <Box className="card">
      <Grid container gap={2} className="card__container">
        <Grid>
          <Paper className="card__container-data">xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className="card__container-data">xs=4</Paper>

        </Grid>
        <Grid>
          <Paper className="card__container-data">xs=4</Paper>

        </Grid>
      </Grid>
      <Grid marginY={2} className="card__container">
        <Paper className="card__container-data">xs=12</Paper>
      </Grid>
    </Box>
    </>
  )
}

export default Dashboard;
