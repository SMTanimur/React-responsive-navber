import React from 'react';

function Hero() {
  return (
    <div className=' container mx-auto md:py-14 self-start '>
      <div className='flex flex-col md:ml-4  py-20 gap-4'>
        <h2 className='text-green-400 '>HEY MAN!</h2>
        <div className='text flex flex-col'>
          <h1
            className='text-white text-2xl md:text-6xl leading-tight
               '
          >
            I AM TANIM <br />
            <span className='text-gray-400'>FULL STACK DEVELOPER</span>
          </h1>
        </div>
        <div className='text-gray-400 text-lg'>
          <p>
            A passionate self-taught Full Stack developer from Bangladesh.
            <br />I develop web applications, mobile applications and desktop <br />
            applications
          </p>
        </div>
        <div className='border-2 border-green-400 rounded-md px-4 py-2 flex self-start
         font-mono font-semibold mt-3 hover:bg-green-300 hover:bg-opacity-10 transition'>
          <button className="px-4 py-2 capitalize text-green-400">get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
