import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/pagination';  // Pagination styles
import 'swiper/css/navigation';  // Navigation styles
import { Pagination, Navigation } from 'swiper/modules';  // Import Pagination and Navigation modules
import './ShopByFandom'

const ShopByFandom = () => {
  
  return (
    <>
    
      <Swiper
        spaceBetween={25}  // Increased space between images for better visual separation
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        speed={800}
        pagination={{ clickable: true }}  // Enable pagination
        navigation={true}  // Enable navigation
        breakpoints={{
          162: {slidesPerView:1},
          320: {
            slidesPerView: 1,
            spaceBetween: 10,  // Adjusted space for small screens
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,  
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,  
          },
        }}
        modules={[Pagination, Navigation]}  
      >
        
        <SwiperSlide>
          <a href="/venom">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Scroll-collab-VENOM-1726574339.jpg"
              alt="venom"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/designs-of-the-week">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/collab-01-1724418025.jpg"
              alt="Designs of the Week"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/sale-view-all">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/collab-07-1724418028.jpg"
              alt="Sale View All"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/buy-3-classic-fit-t-shirts-at-999">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/collab-13-1724836531.jpg"
              alt="Buy 3 Classic Fit T-Shirts at ₹999"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/buy-2-oversized-t-shirts-at-999">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/collab-08-1724418027.jpg"
              alt="Buy 2 Oversized T-Shirts at ₹999"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="image">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/collab-04-1724418026.jpg"
              alt="Joker Merchandise"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopByFandom;