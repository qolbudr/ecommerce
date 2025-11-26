'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import { ProductCard } from "@/module/home/components/ProductCard";
import { useHomeStore } from "../store/home.store";

export const SliderLatestProduct: React.FC = () => {
    const store = useHomeStore();

    return (
        <div className="relative w-full">
            <Swiper
                navigation={{
                    prevEl: ".btn-prev-latest",
                    nextEl: ".btn-next-latest",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Navigation]}
                slidesPerView={2}
                loop={true}
                className="h-full"
            >
                {
                    ...store.products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className="btn-prev-latest">
                <Icon icon={'material-symbols-light:chevron-left-rounded'} className="text-grey text-8xl absolute top-1/2 -translate-y-1/2 -left-[3%] xl:-left-[8%] cursor-pointer" />
            </button>
            <button className="btn-next-latest">
                <Icon icon={'material-symbols-light:chevron-right-rounded'} className="text-grey text-8xl absolute top-1/2 -translate-y-1/2 -right-[3%] xl:-right-[8%] cursor-pointer" />
            </button>
        </div>
    );
};
