
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import MediaCard from "./card/MediaCard";
import { CardItems } from "../data/data";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: absolute;
    bottom: -5px; // Adjust as needed
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

  .swiper-button-prev {
    left: 0px;
    color: #91A3B0;
    width: 20px;
    height: 20px;
  }

  .swiper-button-next {
    right: 0px;
    color: #91A3B0;
    width: 20px;
    height: 20px;
  }
`;

function CardSlider() {
    return (
        <div className="slider-container " style={{ position: 'relative' }}>
            <StyledSwiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {CardItems.map((item) => (
                    <SwiperSlide key={item.id} className="my-4 ">
                        <MediaCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </div>
    );
}

export default CardSlider;
