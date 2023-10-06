import React from 'react';
import Footer from '@/components/Footer';
import SEOMeta from '@/components/SEOMeta';
import Nav from '@/components/Nav';

const TC = () => {
  return (
    <>
      <SEOMeta
        title='Contact Us — Hyperlink School'
        description='Switch to High Paying IT Jobs, Learn the High Paying Skills of Tomorrow! No Software/IT background required'
        slug='tc'
      />

      <main className='m-auto flex max-w-6xl flex-col px-4'>
        <Nav />
        <div className='flex flex-col items-start justify-center gap-6 px-4 py-10 '>
          <div className='flex flex-col gap-2 text-2xl font-medium'>
            Contact Us
            <div className='text-sm'>Updated on 1 September, 2023</div>
          </div>
          <p>
            <strong>Welcome to Hyperlink School! Feel free to email us.</strong>
          </p>

          <strong>Office Addresses</strong>

          <p>
            Room No 1, 799, 1st Floor, 13th Main, 7th Cross, BTM 2nd Stage , BTM
            Layout, Bangalore, Karnataka 560076, India
          </p>

          <p>
            <strong>Student Support Email & Phone Number</strong>
          </p>

          <p>
            hello[at]hyperlinkschool.com <br /> hyperlinkschoolcom[at]gmail.com
            <br />
            +918296244720
          </p>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default TC;
