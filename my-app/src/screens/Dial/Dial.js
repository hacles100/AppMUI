import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {  green } from '@mui/material/colors';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Dial.css'
import BackspaceIcon from '@mui/icons-material/Backspace';
import sound from './Djodje.mp3'



export default function Dial() {


 

    const [display, setDisplay] = useState('');

    function add(event) {
        const newDisplayValue = display + event.target.textContent;
        setDisplay(newDisplayValue);
    }


     function clear() {
        setDisplay('');
     }


     function playAudio() {
        sound.play();
    }

     function chamada(){

        playAudio()
     }


    return <div className="container">

        <h1>{display}     <BackspaceIcon onClick={clear}></BackspaceIcon></h1>


        <div className='numbers'>
            <div className='numbers-1'>
       
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60 }} onClick={add}>1</Avatar>
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>2</Avatar>
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>3</Avatar>      
        
            </div>    
          
          <div className='numbers-2'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>4</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>5</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>6</Avatar>
          </div>
          
          <div className='numbers-3'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>7</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>8</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>9</Avatar>
          </div>
          
          <div className='numbers-4'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>*</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>0</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }} onClick={add}>#</Avatar>
          </div>
   

          <div className='phone'>
            <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} sx={{width: 60, height: 60 }} onClick={chamada}/>
          </div>
      
        </div>
    

    </div>
}