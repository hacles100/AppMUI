
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {  green } from '@mui/material/colors';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Dial.css'

export default function Dial() {


    return <div className="container">

        <h1>5850628</h1>

        <div className='numbers'>
            <div className='numbers-1'>
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60 }}>1</Avatar>
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>2</Avatar>
              <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>3</Avatar>
            </div>
          
          <div className='numbers-2'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>4</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>5</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>6</Avatar>
          </div>
          
          <div className='numbers-3'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>7</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>8</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>9</Avatar>
          </div>
          
          <div className='numbers-4'>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>*</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>0</Avatar>
           <Avatar sx={{ bgcolor: green[500], width: 60, height: 60  }}>#</Avatar>
          </div>

          <div className='phone'>
            <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} sx={{width: 60, height: 60 }} />
          </div>

          
      
        </div>
      
    
        
    </div>
}