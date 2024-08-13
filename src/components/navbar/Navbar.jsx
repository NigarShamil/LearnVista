
import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from 'framer-motion';
import { navItems } from '../../data/data';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../assets/icon.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <div className='relative z-50'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="container py-10 flex justify-between items-center"
            >
                <div>
                    <h1 className='font-bold text-2xl flex justify-center items-center gap-2 cursor-pointer' onClick={() => navigate('/')}><span><img src={Icon} alt="icon" width={30} /></span> LearnVista</h1>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-3'>
                        {navItems.map((menu) => (
                            <Link
                                key={menu.id}
                                to={menu.link}
                                className="inline-block py-2 px-3 hover:text-[#ca57c4] relative group"
                            >
                                <div className="w-2 h-2 bg-[#ca57c4] cursor-pointer absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hover:translate-x-2 duration-300 hidden"></div>
                                {menu.title}
                            </Link>
                        ))}
                        <button onClick={() => navigate('/sign-in')} className='primary-btn'>Sign In</button>
                    </ul>
                </div>
                {/* Mobile Hamburger menu section */}
                <div className='relative lg:hidden'>
                    <MdMenu className='text-4xl cursor-pointer' onClick={() => setOpen(true)} />
                    {open &&
                        <div className='fixed inset-0 bg-[#ca57c4] flex flex-col items-center justify-center z-50 h-screen'>
                            <MdClose className='text-4xl text-white cursor-pointer absolute top-4 right-4' onClick={() => setOpen(false)} />
                            {navItems.map((menu) => (
                                <Link
                                    key={menu.id}
                                    to={menu.link}
                                    className="text-white text-2xl py-2 px-3 hover:text-[#f7ba34] relative group"
                                    onClick={() => setOpen(false)}
                                >
                                    {menu.title}
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            </motion.div>
        </div>
    );
}

export default Navbar;

