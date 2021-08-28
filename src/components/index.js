import React,{useState}from 'react';
import { FcMenu} from 'react-icons/fc';

function Header() {
  const [navbarOpen, setNavbarOpen] =useState(false);
    
  return (
    <>
      <nav className='flex flex-wrap justify-between items-center  relative'>
      <div className="container px-4 py-3 md:py-2 mx-auto items-start flex flex-grow flex-col md:flex-row md:items-center md:justify-between">
        <div className='logo self-start text-lg ml-0 inline-block text-white md:text-xl'>
          <h2 className='font-montserrat font-semibold'>
            Mush
            <span className='text-green-400'>fiq</span>ur
          </h2>
        </div>
        {/* nav-link */}

        <div className={"flex flex-col  flex-grow md:justify-end md:flex-row gap-3 md:gap-4 md:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
          <ul className='flex flex-col md:items-center gap-2 list-none justify-between text-white md:gap-8 text-lg font-mono font-medium md:flex-row '>
            <li>
              <a href='#red' className='text-green-400'>
                01.
                <span className='text-gray-300 ml-2 hover:text-green-400 transition'>
                  About
                </span>
              </a>
            </li>
            <li>
              <a href='#bar' className='text-green-400'>
                02.
                <span className='text-gray-300 ml-2 hover:text-green-400 transition'>
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a href='#head' className='text-green-400'>
                03.
                <span className='text-gray-300 ml-2 hover:text-green-400 transition'>
                  Work
                </span>
              </a>
            </li>
            <li>
              <a href='#ring' className='text-green-400'>
                04.
                <span className='text-gray-300 ml-2 hover:text-green-400 transition'>
                  Contact
                </span>
              </a>
            </li>
          </ul>
          <div className='flex self-center mr-12'>
            <button
              className='btn py-2 px-4 text-green-400 border-2 border-green-400 font-mono rounded-md
             font-medium hover:bg-green-400 hover:bg-opacity-10 '
            >
              Resume
            </button>
          </div>
        </div>
        {/* nav-link end */}
        <button type="button" className="fixed right-10 top-7 text-2xl  md:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}>
           <h3 ><FcMenu className="text-green-400"/></h3>
        </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
