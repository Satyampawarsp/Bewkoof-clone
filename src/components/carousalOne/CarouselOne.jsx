import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/pagination';  // Pagination styles
import 'swiper/css/navigation';  // Navigation styles
import { Pagination, Navigation } from 'swiper/modules';  // Import Pagination and Navigation modules
import './CarouselOne.css'

const CarouselOne = () => {
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
          <a href="/clearance-store">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1X1-saving-zone-common-1727790658.jpg"
              alt="Clearance Store"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/designs-of-the-week">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-DOTW27-commn-ezgif-com-optimize-1727427690.gif"
              alt="Designs of the Week"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/sale-view-all">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Festive-bash-Common-1x1-HC-Banner-1727795637.jpg"
              alt="Sale View All"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/buy-3-classic-fit-t-shirts-at-999">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/HC-1X1-buy-3-999-2-1727790464.jpg"
              alt="Buy 3 Classic Fit T-Shirts at ₹999"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/buy-2-oversized-t-shirts-at-999">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/HC-1X1-buy-2--999-2-1727790548.jpg"
              alt="Buy 2 Oversized T-Shirts at ₹999"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/joker-merchandise?category=t-shirt_hoodies_sweatshirt">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Joker-Ai-Men-1x1-HC-Banner-1727768615.jpg"
              alt="Joker Merchandise"
              className="carousel-image img-fluid"
            />
          </a>
        </SwiperSlide>
      </Swiper>

      <div>
        <a title="#" style={{display: 'block', width: '100%', paddingTop: '10.4167%', position: 'relative', marginTop: '20px'}}>
          <img 
            src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-buy3-1727441580.gif" 
            alt="" style={{position: 'absolute', width: '100%', top: '0px'}} />
        </a>
      </div>
    </>
  );
};

export default CarouselOne;