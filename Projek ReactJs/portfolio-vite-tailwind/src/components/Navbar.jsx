import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
// import { TbMoonStars } from "react-icons/tb";

const Navbar = () => {
    let Links=[
        {name:'Home', link:'#home'},
        {name:'Services', link:'#service'},
        {name:'Experience', link:'#experience'},
        {name:'Contact', link:'#contact'},
    ]
    let [isOpen, setisOpen]=useState(false)
    return (
        <div className='shadow-md w-full bg-white fixed top-0 container z-20'>
            <div className='md:px-1 py-4 px-1 md:flex justify-between items-center'>
                {/* logo here */}
                <div className="flex text-2xl cursor-pointer items-center gap-2">
                    <BeakerIcon className='w-7 h-7 text-blue-600'/>
                    <a href='/' className='font-bold'>portfolio</a>
                </div>

                {/* menu icon */}
                <div onClick={()=> setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6
                cursor-pointer md:hidden'>
                    {
                        isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                    }
                </div>

                {/* nav links here */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                  transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} `}>
                    {
                        Links.map(link => (
                            <li key={link} className='font-semibold my-7 md:my-0 md:ml-8'>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }

                    {/* ini adalah tombol mode malam, untuk saat ini saya belum mau menggunakan mode malam */}
                    {/* <button className='btn text-black text-xl py-1 px-3 md:ml-8 rounded md:static flex'>
                        <TbMoonStars/>
                    </button> */}

                </ul>



            </div>
        </div>
    );
};

export default Navbar;