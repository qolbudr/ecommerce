'use client';

import { Footer } from "@/module/home/components/Footer";
import { Navbar } from "@/module/home/components/Navbar";
import { ProductCard } from "@/module/home/components/ProductCard";
import { SliderHero } from "@/module/home/components/SliderHero";
import { SliderLatestProduct } from "@/module/home/components/SliderLatestProduct";
import { useHomeStore } from "@/module/home/store/home.store";
import { Button } from "@/shared/components/Button";
import React, { useEffect } from "react";

const Home: React.FC = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.getProducts();
    }, []);

    return <>
        <Navbar />
        <div className="w-full p-0 m-0 flex justify-center mt-22">
            <div className="w-full max-w-7xl px-4">
                <section className="pt-4 lg:pt-10">
                    <SliderHero />
                </section>
                <section className="pt-8">
                    <h4 className="mb-8 text-2xl font-bold font-playfair">Terbaru</h4>
                    <SliderLatestProduct />
                </section>
                <section className="pt-8">
                    <h4 className="mb-8 text-2xl font-bold font-playfair">Produk Tersedia</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                        {
                            ...store.products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                </section>
                <section className="text-center pt-8 mb-20">
                    <Button variant="outline">Lihat lebih banyak</Button>
                </section>
            </div>
        </div>
        <Footer />
    </>;
}

export default Home;