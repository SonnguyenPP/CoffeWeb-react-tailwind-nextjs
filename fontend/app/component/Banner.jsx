'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@/components/ui/button"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {
  return (
    <>
    <div className='container'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='container'>
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className='text-7xl font-bold'>Alowish delisious coffe {" "}                     
                         </h1>
                         <img src="/coffe/cafe.png"  alt= "" width={80} height={80} className='absolute top-14  left-48' />
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam amet, aliquam delectus cupiditate et eos dolor. Quia reiciendis quae possimus obcaecati, repudiandae adipisci dignissimos provident pariatur labore, qui non?</p>
                         <div className="flex gap-4 py-6">
                        <Button className="py-4 px-5 bg-black text-white p-3 rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide">download app</Button>
                        <Button className = "rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide" variant="outline">shop coffe</Button>
                    </div>
                    
                    
                    </div>
                    <div className="">
                        <img src="\coffe\hero1.png" alt="" />
                       
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container'>
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className='text-7xl font-bold'>Alowish delisious coffe {" "}                     
                         </h1>
                         <img src="/coffe/cafe.png"  alt= "" width={80} height={80} className='absolute top-14  left-48' />
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam amet, aliquam delectus cupiditate et eos dolor. Quia reiciendis quae possimus obcaecati, repudiandae adipisci dignissimos provident pariatur labore, qui non?</p>
                         <div className="flex gap-4 py-6">
                        <Button className="py-4 px-5 bg-black text-white p-3 rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide">download app</Button>
                        <Button className = "rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide" variant="outline">shop coffe</Button>
                    </div>
                    
                    
                    </div>
                    <div className="">
                        <img src="\coffe\man-holding.png" alt="" />
                       
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='container'>
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className='text-7xl font-bold'>Alowish delisious coffe {" "}                     
                         </h1>
                         <img src="/coffe/cafe.png"  alt= "" width={80} height={80} className='absolute top-14  left-48' />
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam amet, aliquam delectus cupiditate et eos dolor. Quia reiciendis quae possimus obcaecati, repudiandae adipisci dignissimos provident pariatur labore, qui non?</p>
                         <div className="flex gap-4 py-6">
                        <Button className="py-4 px-5 bg-black text-white p-3 rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide">download app</Button>
                        <Button className = "rounded-md shadow-xl hover:scale-105 transition-all font-medium tracking-wide" variant="outline">shop coffe</Button>
                    </div>
                    
                    
                    </div>
                    <div className="">
                        <img src="\coffe\man-holding.png" alt="" />
                       
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>
    </div>
      
    </>
  )
}

export default Banner
