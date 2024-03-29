import { useState } from "react";
import { hamburger,close } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] '
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        {
            isOpen?
            (<div className='max-lg:block hidden transition-transform ease-in-out duration-300'
                onClick={()=>setIsOpen(false)}>
                <img src={close} alt='hamburger icon' width={25} height={25} />
            </div>):
            (<div className='max-lg:block hidden transition-transform ease-in-out duration-300'
                onClick={()=>setIsOpen(true)}>
                <img src={hamburger} alt='close icon' width={25} height={25} />
            </div>)
        }
        {
            isOpen && 
            (
                <div className="flex z-50 absolute top-20 right-0  mr-6flex nded">
                        <ul className="flex flex-col gap-3 bg-[#f5f5f5] py-4 px-4 rounded-md scale-up-ver-top">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                            </li>
                        ))}
                        </ul>
                </div>
            )
        }
      </nav>
    </header>
  );
};

export default Nav;
