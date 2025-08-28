import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import HistoryIcon from '@mui/icons-material/History';
import { History } from "@mui/icons-material";
import EditSquareIcon from '@mui/icons-material/EditSquare';
import Edit from "./Edit";


const Preview = () => {
  return (
    <div>
      <Box>
<Stack justifyContent={'end'} direction={'row'} spacing={2}>
  <Button  variant="text">
    <SimCardDownloadIcon/>
  </Button>
<Edit/>
  <Button  variant="text">
    <HistoryIcon/>
  </Button>
  <Button variant="text">
    Back
  </Button>

</Stack>

      </Box>
      <Box
        sx={{
          width: "700px",
          height: "700px",
          m: 5,
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          borderRadius: "10px",
        }}
      >
        <Paper className="w-100 p-3" elevation={7}>
          <Typography variant="h4" align="center" component={"h1"}>
            Full Name
          </Typography>
          <Typography variant="subtitle2" align="center" color="blue">
            Job title
          </Typography>
          <Typography variant="subtitle2" align="center">
            Location | email | Phone no
          </Typography>
          <Typography variant="body2" align="center" mb={4}>
            <Link>Git</Link> | <Link>Linkdin</Link> | <Link>Portfolio</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography variant="">summary</Typography>
          <Divider>Education Details</Divider>
          <Typography variant="h5" align="center">
            Course Name
          </Typography>
          <Typography variant="body2" align="center" mb={4}>
            College Name | University | Year
          </Typography>
          <Divider>Professional Experience</Divider>
          <Typography variant="h5" align="center">
            Job Name
          </Typography>
          <Typography variant="body2" align="center" mb={4}>
            Company Name | Location | Duration
          </Typography>
          <Divider>Skills</Divider>
          <Stack direction={"row"} spacing={2}>
            <Button variant="outlined">Skills</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default Preview;
