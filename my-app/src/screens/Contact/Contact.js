import ImageIcon from '@mui/icons-material/Image';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import AddContact from './AddContact';

export default function Contact() {

    const [contacts, setContacts] = useState([]);
    const pathUrl = 'http://localhost:3000/persons';

    useEffect(() => {
        getPersons();
    }, []);

    function getPersons() {
        axios.get(pathUrl)
            .then(response => {
                console.log(response);
                setContacts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function onCreate(newPerson) {
        contacts.push(newPerson);
        setContacts([...contacts]);
    }

    return <>
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            {contacts.map((contact, i) =>
                <Box key={i}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={contact.name}
                            secondary={contact.phone} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Box>
            )}

        </List>
        <AddContact
            contactsState={[contacts, setContacts]}
            onCreation={onCreate}/>
    </>
}