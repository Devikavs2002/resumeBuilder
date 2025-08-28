import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { TextField } from "@mui/material";


const Edit = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,


  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="text" title="history">
        <EditSquareIcon />
      </Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Edit details
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Personal Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Job Title"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Location"
            variant="standard"
          />
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Contact Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Phone Number"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Github Profile Link"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Linkedin Profile Link "
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Portfolio Link"
            variant="standard"
          />
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Education Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Course Name"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="College Name"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="University"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Year of Passing"
            variant="standard"
          />
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Professional Details
          </Typography>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Job or internship"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Company Name"
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Location "
            variant="standard"
          />
          <TextField
            className="w-100"
            id="standard-basic"
            label="Duration"
            variant="standard"
          />
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Skills
          </Typography>
           <TextField
            className="w-100"
            id="standard-basic"
            label="Add Skills"
            variant="standard"
          />
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Selected Skills
          </Typography>
           <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
            Personal Summary
          </Typography>
           <TextField className="w-100"
                    id="standard-multiline-static"
                    label="Write a short summary of yourself"
                    multiline
                    rows={4} 
                    defaultValue="I am passionate full-stack developer with hands on experience in React,Node ..."
                    variant="standard"
                  />
                   <Button variant="outlined" sx={{mt:2}}>Update</Button>
        </Box>
      </Modal>
    </>
  );
};


export default Edit;
