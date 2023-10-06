import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center gap-2 text-xs'>
      <a
        href='https://hyperlinkschool.com/'
        target='_blank'>
        hyperlink school
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/privacy'
        target='_blank'>
        privacy
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/tc'
        target='_blank'>
        tearm & conditions
      </a>
    </div>
  );
};

export default Footer;
