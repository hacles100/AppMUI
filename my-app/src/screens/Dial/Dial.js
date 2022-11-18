
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  green } from '@mui/material/colors';
import './Dial.css'

export default function Dial() {


    return <div className="container">

        <h1>5850628</h1>

        <div className='numbers'>
        <Stack direction="row" spacing={2}>
         <Avatar sx={{ bgcolor: green[500] }}>1</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>2</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>3</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>4</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>5</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>6</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>7</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>8</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>9</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>*</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>0</Avatar>
         <Avatar sx={{ bgcolor: green[500] }}>#</Avatar>
        </Stack>
        </div>
      
    
        
    </div>
}