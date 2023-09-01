"use client"
import React from 'react'
import Contact from "@/components/homePage/Contact/Contact";
import Services from "@/components/homePage/Services/Services";
import Review from "@/components/homePage/Review/Review";
import ServiceArea from "@/components/homePage/ServieArea/ServiceArea";
import Banner from "@/components/Banner";



const Homes = () => {
    return (
        <>
            <Banner/>
            <Services />
            <ServiceArea />
            <Review />
            <Contact/>
        </>
    )
}

export default Homes