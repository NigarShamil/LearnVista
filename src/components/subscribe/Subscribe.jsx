
import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import BgImg from "../../assets/bg.png";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../data/confetti.json';

const bgStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribed = () => {
        navigator.clipboard.writeText("contact@nora.pro");
        setSubscribed(true);
    }

    return (
        <div className='bg-[#f7f7f7]'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={bgStyle} className="container py-24 md:py-48"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex flex-col justify-center"
                >
                    <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                        <h1 className='text-4xl font-bold !leading-snug'>450K+ Students are learning from us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae iusto minima
                        </p>
                        <div className='relative'>
                            {subscribed && (
                                <div className='absolute -bottom-5 right-0'>
                                    <Lottie
                                        animationData={animationData}
                                        loop={false}
                                        autoplay={true}
                                    />
                                </div>
                            )}
                            <a
                                href="#"
                                className='primary-btn !mt-8 inline-flex items-center gap-4 group'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubscribed();
                                }}
                            >
                                {subscribed ? "Subscribed" : "Subscribe Now"}
                                <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Subscribe;
