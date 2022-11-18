import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {  green } from '@mui/material/colors';
import './Contact.css'


export default function Contact() {

    return <div className='container'>
        <h1>Contact List</h1>

        <div className='main'>

          <div className='first'>
            <Avatar alt="Neymar"  sx={{ bgcolor: green[500], width: 50, height: 50  }}/>
            <span>Menino Ney</span>
          </div>

          <div className='second'>
            <Avatar alt="Neymar"  sx={{ bgcolor: green[500], width: 50, height: 50  }}/>
            <span>Neymar Junior</span>
          </div>

          <div className='third'>
            <Avatar alt="Neymar"  sx={{ bgcolor: green[500], width: 50, height: 50  }}/>
            <span>Hericles Rocha</span>
          </div>
        </div>
      

    </div>
}