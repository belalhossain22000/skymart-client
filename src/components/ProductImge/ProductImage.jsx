import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Initialize Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const ProductImage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {/* Your main images */}
                {/* Add your SwiperSlides with images */}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {/* Your thumbnails */}
                {/* Add your SwiperSlides with thumbnail images */}
            </Swiper>
        </>
    );
};

export default ProductImage;
