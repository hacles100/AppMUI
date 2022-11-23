import { Fab } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function AddContact({onCreation, contactsState}) {

    const [contacts, setContacts] = contactsState;

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const pathUrl = 'http://localhost:3000/persons';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleSave() {
        console.log(name);
        console.log(phone);

        const newContact = {
            name: name,
            phone: phone
        }

        axios.post(pathUrl, newContact)
            .then(resp => {
                console.log(resp.data);

                // option 1
                contacts.push(resp.data);
                setContacts([...contacts]);
                
                // option 2
                // onCreation(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <Fab size="medium" color="primary" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new contact</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Phone number"
                        type="phone"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}