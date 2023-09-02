"use client"
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import kuwaitCity from "@/../public/source/allcity/aljahara.png"

const Capital = () =>
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Image
                        src={kuwaitCity}
                        alt='city picture'
                        width={1380}
                        height={1080}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Capital;