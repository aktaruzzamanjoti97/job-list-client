import { Button, makeStyles, Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Box p={2} m={2} className={classes.wrapper}>
        <Select disableUnderline variant="filled" defaultValue="Full time">
          <MenuItem value="Full time">Full time</MenuItem>
          <MenuItem value="Part time">Part time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </Select>

        <Select disableUnderline variant="filled" defaultValue="Remote">
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="In-Office">In-Office</MenuItem>
        </Select>

        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchBar;
