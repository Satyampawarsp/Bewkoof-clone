import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './BewkoofSneakers.css'

const Sneakers = () => {
    const products = [
        {
            id: 1,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-sneakers-648914-1727087677-1.JPG&w=1920&q=75",
            title: "Mr.Wonker",
            text: "Mens Black Sneakers.",
            heart: <i class="bi bi-heart"></i>,
            price: "₹789",
            discount: "4999",
            off: "84% OFF",
           
        },
        {
            id: 2,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-silver-nasa-color-block-high-top-sneakers-630676-1717834801-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Mens White & Silver NASA",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1599",
            discount: "499",
            off: "68% OFF"
        },

        {
            id: 3,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-green-black-avocado-convertible-color-block-high-top-sneakers-640592-1732168880-1.gif&w=1920&q=75",
            title: "Bewakoof®",
            text: "Mens black and Green Avocado",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 2499",
            discount: "4999",
            off: "50% OFF"
        },
        {
            id: 4,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-solid-sneakers-black-648612-1726550307-1.JPG&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 5,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-black-naruto-color-block-low-top-sneakers-640588-1728553976-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1999",
            discount: "199",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 6,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-beige-stark-latte-color-block-sneakers-640591-1725605377-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 7,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-maroon-black-deadpool-color-block-high-top-sneakers-630669-1722845944-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 8,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-sneakers-648912-1727088086-1.JPG&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1799",
            discount: "399",
            off: "20% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 9,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-blue-bolt-color-block-high-top-sneakers-630675-1720789714-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 10,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-marvel-glow-in-dark-high-top-sneakers-640589-1729176011-1.gif&w=1920&q=75  ",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 11,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-grey-punisher-color-block-high-top-sneakers-630677-1719398106-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build.",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1299",
            discount: "599",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 12,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-batman-sneakers-634000-1719899469-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "300",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 13,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-grey-color-block-high-top-sneakers-637062-1722835677-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1599",
            discount: "3000",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 15,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-red-black-color-block-high-top-sneakers-630682-1721643544-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 2000",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 16,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-white-blue-color-block-low-top-sneakers-634001-1721214169-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },

        {
            id: 17,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-grey-dark-knight-reflective-color-block-high-top-sneakers-640590-1727266931-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        ,
        {
            id: 18,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-red-akatsuki-color-block-high-top-sneakers-630683-1720528499-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 5000",
            discount: "2000",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 19,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-yellow-dark-knight-color-block-high-top-sneakers-630672-1718715099-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 20,
            imageUrl: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-green-black-kakashi-color-block-high-top-sneakers-630679-1718781621-1.jpg&w=1920&q=75",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 21,
            imageUrl: "https://images.bewakoof.com/t320/men-s-black-beige-stark-latte-color-block-sneakers-640591-1725605377-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
    ];

    return (
        <div className="container-fluid classic-hit mt-3">
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <h3 className='text-center branding fs-6'>Bewakoof Sneakers</h3>
                </div>
            </div>
            <div className="row p-4">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    loop={true}
                    speed={3000}
                    navigation={true}

                    breakpoints={{  
                        320: { slidesPerView: 2, spaceBetween: 10 },  
                        640: { slidesPerView: 3, spaceBetween: 20 },  
                        768: { slidesPerView: 4, spaceBetween: 25 },  
                        1024: { slidesPerView: 5, spaceBetween: 30 }, 
                    }}
   
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="card h-100 ">
                                <img src={product.imageUrl} alt={product.title} className="card-img-top" />
                               
                                <div className="card-body d-flex flex-column">
                                    <h5 className="fs-6">{product.title}</h5>
                                    
                                    <div className="d-flex justify-content-between align-items-center ">
                                    <p className="paragraph ">{product.text}</p>
                                        <span className="heart-icon">{product.heart}</span>
                                    </div>
                                    <h5 className="price text-dark ">
                                        {product.price} <span className="text-muted discount"><del>{product.discount}</del></span>
                                        <span className=" offer ">{product.off}</span>
                                    </h5>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="row">
                <div className="col-lg-12 explore text-center">
                    <a className='' href="">Explore All</a>
                </div>
            </div>
        </div>
    );
};

export default Sneakers;
