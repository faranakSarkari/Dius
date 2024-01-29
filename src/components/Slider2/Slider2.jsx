import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function Slider2() {
  return (
    <>
    <div class="sec2 container-fluid bg-dark p-0">
  <div class="row m-0">
    <h2 class="text-white text-center mt-2 p-0">Office Supplies</h2>
    <div class="row m-0 p-0" >
      
    <Swiper
        slidesPerView={4}
        spaceBetween={40} 
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/818QiEm3fzL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/91Mzxq7G-ZL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/910M07IPJlL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/91QBFpwHNLL._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/81N0IZst9WL._SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/91xjG7eZ71L._AC_SL1500_.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://m.media-amazon.com/images/I/71Qa3eKCdfL._AC_SL1500_.jpg'/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
    </>
  )
}
