import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider1() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper swiper-wrapper"
      >
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/81L3QvXrYoL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/A12BC9g6POL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/91+8dRkAGEL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/81wzEAPMywL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/81RCrjPwRBL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/91+hJ7kZThL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/81dk-XfPLWL._AC_SL1500_.jpg'/>
        </SwiperSlide>
      </Swiper>

    </>
  );
}