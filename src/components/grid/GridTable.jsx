
import React, { useState, useEffect } from 'react';
import { TableItems } from '../../data/data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10; // Ensure it is above the content
  }

  .swiper-pagination-bullet {
    background-color: #BEBFC5;
    width: 6px;
    height: 6px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #007bff;
  }

  .swiper-button-prev, .swiper-button-next {
    color: #91A3B0;
    width: 20px;
    height: 20px;
  }

  .swiper-button-prev {
    left: 0px; // Adjust as needed
  }

  .swiper-button-next {
    right: 0px; // Adjust as needed
  }
`;

const GridTable = () => {
    const [chunkSize, setChunkSize] = useState(6);

    useEffect(() => {
        const updateChunkSize = () => {
            if (window.innerWidth >= 1024) {
                setChunkSize(6); // 3 columns x 2 rows for large screens
            } else if (window.innerWidth >= 768) {
                setChunkSize(4); // 2 columns x 2 rows for medium screens
            } else if (window.innerWidth >= 640) {
                setChunkSize(2); // 2 columns x 1 row for small screens
            } else {
                setChunkSize(1);
            }
        };

        updateChunkSize(); // Set initial chunk size

        window.addEventListener('resize', updateChunkSize); // Update on window resize

        return () => window.removeEventListener('resize', updateChunkSize); // Cleanup on unmount
    }, []);

    // Function to chunk the array into groups based on chunkSize
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const tableChunks = chunkArray(TableItems, chunkSize); // Split into chunks based on responsive chunkSize

    return (
        <div className='my-6 relative'>
            <StyledSwiper
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={20}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {tableChunks.map((chunk, index) => (
                    <SwiperSlide key={index} className="my-5 ">
                        <div className={`grid grid-cols-${chunkSize <= 2 ? 2 : chunkSize / 2} gap-4 text-center `}>
                            {chunk.map((tableItem) => (
                                <Link
                                    key={tableItem.id}
                                    className='border rounded-md text-lg font-semibold py-3 border-slate-300 hover:bg-slate-100 '
                                    to={tableItem.link}
                                >
                                    {tableItem.title}
                                </Link>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </div>
    );
};

export default GridTable;
