import React from "react"
import { Carousel } from "@material-tailwind/react";
import Loading from "./Loading";

import { useAppContext } from '../Context'

const Hero = () => {

    const { allData, isLoading } = useAppContext();

    const retreatsData = allData

    const navi = () => (
        <span
            className='hidden'
        />
    )

    return (
        <>
            <section className="py-14  drop-shadow-md shadow-slate-200" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} data-aos="zoom-in" data-aos-duration="300">
                <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                    <div className="max-w-4xl space-y-2 md:mx-auto">
                        {!isLoading ?
                            <Carousel loop={true} autoplay={true} className="group/img rounded-xl shadow-lg mb-8 shadow-gray-400" navigation={navi} nextArrow={navi} prevArrow={navi} data-aos="zoom-in" data-aos-duration="600">
                                {retreatsData.map((item, idx) => (
                                    <img
                                        key={idx}
                                        src={item.image}
                                        loading="lazy"
                                        alt={item.title}
                                        className="w-full h-60 bg-center object-cover brightness-95 duration-150 group-hover/img:brightness-100"
                                    />
                                ))}
                            </Carousel> : <Loading />}
                        <p className="text-gray-800 text-2xl font-medium sm:text-3xl" data-aos="fade-up" data-aos-delay="1000">
                            Discover your inner peace
                        </p>
                        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="1200">
                            Join us for a wellness retreats designed to help you find tranquility and rejuvenation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero