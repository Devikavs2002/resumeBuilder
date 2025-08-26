import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <div className='footer p-5'>
      <h2 className=' text-center '>Contact Us</h2>
      <div className='footer-content text-center  '>
<EmailIcon>
 
</EmailIcon> rbuilder@gmail.com
<br />
<SmartphoneIcon></SmartphoneIcon>9898989898

<div className='p-4'>
  <h2>Contact With Us</h2>
<div className="icon">
  <WhatsAppIcon></WhatsAppIcon>
<InstagramIcon></InstagramIcon>
<LinkedInIcon></LinkedInIcon>
</div>

<p>Designed & built with ❤️ using React</p>
</div>



      </div>

    </div>
  )
}
