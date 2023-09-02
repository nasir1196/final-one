"use client"
import React from 'react'

import Banner from "@/components/Banner";
import ContactForm from "@/components/homePage/ContactForm/Contact";
import Review from "@/components/homePage/Review/Review";
import ServiceArea from "@/components/homePage/ServieArea/ServiceArea";
import Services from "@/components/homePage/Services/Services";



const Homes = () => {
    return (
        <>
            <Banner/>
            <Services />
            <ServiceArea />
            <Review />
            <ContactForm/>
        </>
    )
}

export default Homes