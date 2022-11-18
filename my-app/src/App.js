import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Contact from './screens/Contact';
import Dial from './screens/Dial';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ pb: 7 }}>

      {activeTab===1 && <Contact />}
      {activeTab===0 && <Dial />}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} />
          <BottomNavigationAction label="Contact" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>

    </Box>
  );
}


