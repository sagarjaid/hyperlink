import React from 'react';

const Nav = () => {
  return (
    <nav className=' flex justify-between items-center p-4 text-xs'>
      <div className='flex gap-6 items-center'>
        <a href='http://hyperlinkschool.com/'>
          <img
            src='hp-logo.png'
            className='w-[130px] sdm:w-[200px] pt-1'
          />
        </a>
        {/* <div className='flex cursor-pointer w-fit items-center gap-1 justify-around rounded-md bg-blue-500 hover:bg-blue-600 p-2.5 px-4 text-white shadow-sm'>
              <span className='font-bold'>COURSES</span>
              <img
                src='/right.svg'
                className='w-4'
              />
            </div> */}
      </div>
      <div className='flex gap-6 items-center font-bold'>
        {/* <div>PLACEMENT WALL</div> */}
        {/* <div>FREE MASTERCLASS</div> */}
        <a
          href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
          target='_blank'
          className=' cursor-pointer w-fit font-bold gap-1  rounded-md border-2 border-black p-1.5 px-4 text-black shadow-sm'>
          FREE MASTERCLASS
        </a>
        {/* <div className=' cursor-pointer w-fit font-bold gap-1  rounded-md border-2 border-black p-1.5 px-4 text-black shadow-sm'>
              APPLY NOW
            </div> */}
      </div>
    </nav>
  );
};

export default Nav;
