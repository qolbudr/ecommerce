import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";

export const SliderHero: React.FC = () => {
    return (
        <div className="relative w-full">
            <Swiper
                navigation={{
                    nextEl: ".btn-next",
                    prevEl: ".btn-prev",
                }}
                pagination={{
                    el: ".pagination",   
                    renderBullet: (index, className) => {
                        return `<span class="${className} mx-1 w-3 h-3 bg-grey! rounded-full inline-block"></span>`;
                    },
                    clickable: true,
                    
                }}
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                className="h-full"
            >
                <SwiperSlide>
                    <img
                        src="/images/hero-slider/1.png"
                        className="w-full h-full object-cover"
                        alt="hero-slider-1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/hero-slider/1.png"
                        className="w-full h-full object-cover"
                        alt="hero-slider-2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/hero-slider/1.png"
                        className="w-full h-full object-cover"
                        alt="hero-slider-3"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="flex mt-3 items-center">
                <button className="btn-prev">
                    <Icon icon={'mdi-chevron-left'} className="text-grey text-3xl" />
                </button>
                <div className="pagination relative top-0! w-auto!">

                </div>
                <button className="btn-next">
                    <Icon icon={'mdi-chevron-right'} className="text-grey text-3xl" />
                </button>
            </div>
        </div>
    );
};
