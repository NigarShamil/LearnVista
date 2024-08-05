import React from 'react'
import { MdMenu } from "react-icons/md";
import { motion } from 'framer-motion';


const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'Services',
        link: '#',
    },
    {
        id: 3,
        title: 'About Us',
        link: '#',
    },
    {
        id: 4,
        title: 'Our Team',
        link: '#',
    },
    {
        id: 5,
        title: 'Contact Us',
        link: '#',
    },
]

const Navbar = () => {
    return (
        <div className='relative z-20'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="container py-10 flex justify-between items-center">
                <div>
                    <h1 className='font-bold text-2xl'>LearnVista</h1>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-3'>
                        {
                            NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.path}
                                        className="inline-block py-2 px-3 hover:text-[#69a79c] relative group">
                                        <div className="w-2 h-2 bg-[#69a79c] cursor-pointer absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hover:translate-x-2 duration-300 hidden"></div>
                                        {menu.title}
                                    </a>
                                </li>
                            ))
                        }
                        <button className='primary-btn'>Sign In</button>
                    </ul>
                </div>
                {/* Mobile Hamburger menu section */}
                <div className='lg:hidden'>
                    <MdMenu className='text-4xl' />
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar