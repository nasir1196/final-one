"use client";
import React from 'react';
import Slider from "react-slick";


const AlAhmadi = () =>
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
       <div>
        <Slider {...settings}>

        </Slider>
       </div>
    );
};

export default AlAhmadi;