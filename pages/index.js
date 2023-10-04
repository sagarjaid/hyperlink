import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Hyperlink School - Get Job-Ready with IT Courses</title>
        <meta
          name='title'
          content='Hyperlink School — Get Job-Ready with IT Courses'
        />
        <meta
          name='description'
          content='Switch to High Paying IT Job, Learn the High Paying Skills of Tomorrow! No Software/IT background required'
        />
        <link
          rel='canonical'
          href='https://hyperlinkschool.com'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://hyperlinkschool.com'
        />
        <meta
          property='og:title'
          content='Hyperlink School — Get Job-Ready with IT Courses'
        />
        <meta
          property='og:description'
          content='Switch to High Paying IT Job, Learn the High Paying Skills of Tomorrow! No Software/IT background required'
        />
        <meta
          property='og:image'
          content='https://hyperlinkschool.com/cover.png'
        />

        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://hyperlinkschool.com'
        />
        <meta
          property='twitter:title'
          content='Hyperlink School — Get Job-Ready with IT Courses'
        />
        <meta
          property='twitter:description'
          content='Switch to High Paying IT Job, Learn the High Paying Skills of Tomorrow! No Software/IT background required'
        />
        <meta
          property='twitter:image'
          content='https://hyperlinkschool.com/digital-marketing-social.png'
        />
        <link
          rel='icon'
          href='https://hyperlinkschool.com/favicon.png'
        />

        <meta
          name='google-site-verification'
          content='eOAAT8a829VDP-xyjZDHDe9iwtv2R0A8eUpzE75L8G0'
        />
      </Head>

      <section className='m-auto  max-w-6xl flex flex-col text-gray-700'>
        <Nav />
      </section>
      <section className='bg-gradient-to-t from-blue-100 via-gray-50 to-gray-200'>
        <div className=' m-auto flex flex-col-reverse md:flex-row max-w-6xl w-full items-center p-4 pb-24 md:pt-20'>
          <div className='flex flex-col md:w-[50%] gap-5 mt-10 md:mt-0'>
            <div className='text-xs rounded-full font-bold bg-white border text-black  w-fit p-2 px-3'>
              Switch to High Paying IT Job
            </div>
            {/* <div className='text-xs relative rounded-full font-bold bg-white border text-black  w-fit p-2.5 px-4'>
              Switch to High Paying IT Job
              <span class='absolute -top-0.5 left-6 animate-ping  inline-flex rounded-full h-2 w-2 bg-rose-500'></span>
            </div> */}
            <h2 className='text-4xl font-bold text-blue-600 leading-snug	'>
              Learn the High Paying Skills of Tomorrow!
            </h2>
            <p className='text-sm'>No Software/IT background required</p>

            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='flex cursor-pointer w-fit items-center text-sm gap-1 justify-around rounded-md bg-blue-500 hover:bg-blue-600 p-2.5 px-4 text-white shadow-sm'>
              <span className='font-bold'>FREE MASTERCLASS</span>
              <img
                src='/right.svg'
                className='w-4'
              />
            </a>
          </div>

          <div className='flex-grow md:w-[50%]'>
            <img src='hero-2.png' />
          </div>
        </div>
      </section>
      <section className='m-4 sd:m-8 md:m-auto md:w-fit max-w-5xl flex gap-8 justify-center border shadow-md rounded-2xl p-10 relative bottom-12 bg-white'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <div className='text-4xl font-bold'>120+</div>
            <div>Placements pan India</div>
          </div>
          <div>
            <div className='text-4xl font-bold'>50%</div>
            <div>Average Hike in Salary</div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <div className='text-4xl font-bold'>100+</div>
            <div>Live Projects by Students</div>
          </div>

          <div>
            <div className='text-4xl font-bold'>96%</div>
            <div> Students Got Dream Job</div>
          </div>
        </div>
      </section>

      <section className='m-auto  max-w-6xl flex flex-col  p-4 text-gray-700 '>
        <div className='flex flex-col gap-3 p-4 pb-10'>
          <h2 className='text-3xl font-bold leading-snug	'>Our Courses</h2>
          <h2 className='text-xl font-bold leading-snug	'>
            Get Job-Ready with these IT Courses
          </h2>
        </div>
        <section className='flex justify-around flex-wrap'>
          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-4'>
              <img
                src='app-icon.png'
                className='w-32'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>APP DEVELOPMENT</p>
            <div className='px-4'>
              The Complete App Development Mastery (React Native)
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 26+ modules</li>
              <li>✓ 3-4 months</li>
              <li>✓ 5+ Live projects</li>
              <li>✓ Andriod + iOS</li>
              <li>✓ Job guarantee</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>

          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-5'>
              <img
                src='frontend-icon.png'
                className='w-36'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>FRONTEND DEVELOPMENT</p>
            <div className='px-4'>
              The Complete Frontend Web Development Mastery (React Js)
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 34+ modules</li>
              <li>✓ 4 months</li>
              <li>✓ 3+ Web Projects</li>
              <li>✓ HTML + CSS + JS + React + API</li>
              <li>✓ Job guarantee</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>

          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-5'>
              <img
                src='backend-icon.png'
                className='w-36'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>BACKEND DEVELOPMENT</p>
            <div className='px-4'>
              The Complete Backend Web Development Mastery (Node Js)
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 20+ modules</li>
              <li>✓ 4 months</li>
              <li>✓ 2 REST API</li>
              <li>✓ Node + Express + DB + REST API</li>
              <li>✓ Job guarantee</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>

          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-4'>
              <img
                src='mern-icon.png'
                className='w-52'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>
              FULl STACK WEB DEVELOPMENT
            </p>
            <div className='px-4'>
              The Complete Web Development Mastery (MERN Stack)
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 60+ modules</li>
              <li>✓ 6-8 months</li>
              <li>✓ 6+ Live projects</li>
              <li>✓ MongDB + Expeess + Ract + Node</li>
              <li>✓ Job guarantee</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>
          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-4'>
              <img
                src='wp-icon.png'
                className='w-32'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>WORDPRESS DEVELOPMENT</p>
            <div className='px-4'>
              The Complete WordPress Web Development Mastery
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 20+ modules</li>
              <li>✓ 3 months</li>
              <li>✓ 3+ Live projects</li>
              <li>✓ FREE theme + Hosting</li>
              <li>✓ Job assistance</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>
          <div className=' flex flex-col gap-4 border shadow-md hover:shadow-lg rounded-2xl max-w-[350px] mb-10'>
            <div className='w-full bg-blue-50 rounded-t-xl flex flex-col p-4 mb-4'>
              <img
                src='dm-icon.png'
                className='w-36'
              />
            </div>

            <p className='text-lg font-extrabold px-4'>DIGITAL MARKETING</p>
            <div className='px-4'>
              The Digital Marketing Mastery Course - 2023 updated
            </div>
            <ul className='flex flex-col gap-1 px-4'>
              <li>✓ 24+ modules</li>
              <li>✓ 3-4 months</li>
              <li>✓ Your personal blog</li>
              <li>✓ Dual certificate</li>
              <li>✓ Job guarantee</li>
            </ul>
            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='border-t py-3 text-blue-500 font-bold px-4'>
              FREE MASTERCLASS
            </a>
          </div>
        </section>

        <section className='flex flex-col md:flex-row  w-full items-center border bg-blue-50 border-blue-500 shadow-md rounded-xl my-10'>
          <div className='flex items-center w-full  p-4'>
            <img src='free-masterclass.png' />
          </div>
          <div className='flex flex-col w-full gap-6 p-6'>
            <img
              src='free-class.png'
              className='w-40'
            />
            <h2 className='text-2xl font-bold leading-snug	'>
              Attend FREE MASTERCLASS and Learn core concepts in 1 hour
            </h2>
            <p className='text-sm'>We run free masterclass every Sunday!</p>

            <a
              href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
              target='_blank'
              className='flex cursor-pointer w-fit items-center gap-1 justify-around rounded-md bg-gray-700 hover:bg-gray-800 p-2.5 px-4 text-white shadow-sm'>
              <span className='font-bold'>JOIN FREE MASTERCLASS</span>
              <img
                src='/right.svg'
                className='w-4'
              />
            </a>
          </div>
        </section>

        <section className='flex flex-col md:flex-row w-full shadow-sm border items-center my-10 rounded-xl'>
          <div className='flex items-center w-full  p-4'>
            <img
              src='hsrp.png'
              className='w-full md:w-3/4'
            />
          </div>
          <div className='flex flex-col w-full gap-6 p-6'>
            <img
              src='icon.png'
              className='hidden md:block md:w-20 md:mb-6'
            />
            <h2 className='text-2xl font-bold leading-snug	'>
              100% Job Guarantee, Otherwise 100% Money Back
            </h2>
            <p className='text-sm font-bold'>
              Hyperlink School Technical Courses Refund Policy
            </p>
            <p>
              Hyperlink School is committed to providing high-quality
              educational services to our students. We understand that
              occasionally circumstances may arise where a student may need to
              request a refund. This policy outlines the conditions under which
              a 100% refund may be granted. Click on the below button to read
              the refund policy and eligibility.
            </p>

            <a
              href='hyperlink-school-technical-courses-refund-policy.pdf'
              target='_blank'
              className='underline text-xs'>
              View Hyperlink School's Refund Pocliy
            </a>
          </div>
        </section>
      </section>

      <div className=' w-full flex items-center justify-center mb-20'>
        <div className=' m-4 flex max-w-4xl flex-col items-center text-center justify-center gap-4 rounded-3xl bg-blue-500 px-8 py-16 text-white'>
          <div className='mt-4 text-3xl font-bold'>
            Take a first step toward your dream career today!
          </div>
          <p className='max-w-lg text-center'>
            Add skills that are valued globally and switch to high paying IT Job
          </p>
          <a
            href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
            target='_blank'
            className=' cursor-pointer w-fit font-semibold gap-1  text-sm rounded-full border bg-white p-2 px-5 text-blue-500 '>
            JOIN FREE MASTERCLASS
          </a>
        </div>
      </div>

      <div className='relative overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-t from-white via-blue-200 to-white px-2 flex'>
        <div className='slide-track flex-row gap-2 bg-transparent flex'>
          <img
            src='icons/company-57.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-58.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-59.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-60.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-61.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-62.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-63.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-64.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-65.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-66.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-67.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-68.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-69.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-1.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-2.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-3.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-38.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-70.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-28.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-71.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-72.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-73.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-74.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-75.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-43.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-44.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-45.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-46.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-67.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
        </div>
        <div className='slide-track-2 flex-row gap-2 bg-transparent flex'>
          <img
            src='icons/company-20.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-21.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-22.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-23.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-24.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-25.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-26.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-27.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-28.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-29.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-30.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-31.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-32.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-33.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-34.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-35.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-36.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-37.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-38.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-39.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-40.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-41.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-43.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-44.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-45.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-46.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-67.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-68.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-69.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-70.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-47.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-48.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-49.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-50.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-51.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-52.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-53.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-54.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-55.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-56.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
        </div>
        <div className='slide-track-3  flex-row gap-2 bg-transparent flex'>
          <img
            src='icons/company-1.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-2.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-3.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-38.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-39.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-40.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-4.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-5.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-6.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-7.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-8.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-9.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-10.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-11.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-12.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-13.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-14.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-34.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-35.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-36.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-37.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-38.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-16.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-17.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-18.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
          <img
            src='icons/company-19.png'
            className='w-[117px] h-[105.46px] rounded-xl'
          />
        </div>
      </div>

      <div className='m-auto flex justify-center gap-2 text-xs px-4 py-8'>
        <a
          href='https://hyperlinkschool.com/privacy'
          target='_blank'>
          Privacy
        </a>
        <span>|</span>
        <a
          href='https://hyperlinkschool.com/tc'
          target='_blank'>
          T&C
        </a>
      </div>
    </>
  );
};

export default index;
