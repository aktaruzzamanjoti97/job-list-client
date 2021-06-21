import React from "react";
// import { Typography } from '@material-ui/core';
import { Button, Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <Box style={{ backgroundColor: "#0b0b15" }} py={10}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
              <h1 className="text-white">Open Job Listing</h1>
              <Button variant="contained" color="primary" disableElevation>
                Post a job
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Header;
