import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [nameInput, setNameInput] = useState();
  const [numberInput, setNumberInput] = useState();
  const [dataa, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/persons")
      .then((res) => {
        setData(res.dataa);
      })
      .catch((err) => console.log(err));
  }, []);

  const postData = (e) => {
    e.preventDefault();

    const newContact = {
      name: nameInput,
      phone: numberInput,
    };

    axios
      .post("http://localhost:3000/persons", newContact)
      .then((res) => {
        console.log("posting data", res)
        // onCreate(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar Pessoas</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="number"
            fullWidth
            variant="standard"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={postData}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
