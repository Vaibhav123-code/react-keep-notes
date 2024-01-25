import React, { useState } from 'react'; 
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreIcon from '@mui/icons-material/MoreVert';
import './style.css'
import TemporaryDrawer from '../Drawer';

export default function AppBar() {
 
  return (
    <div className='appbar'>
         <div className='icons'>
           <MenuRoundedIcon />
         </div>
          <div className='icons search'>
             <SearchRoundedIcon className='icon'/>
            <MoreIcon />
        </div>
        
    </div>
  );
}