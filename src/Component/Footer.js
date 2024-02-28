import React from 'react';
import './footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
      <p><CallRoundedIcon />Toll free 1800 200 1234</p>
        <p><FacebookRoundedIcon /> www.facebook.com/cripumps</p>
        <p><LanguageRoundedIcon />www.crigroups.com</p>
      </div>
    </div>
  );
}

export default Footer;
