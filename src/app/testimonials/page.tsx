"use client"
import React from 'react'
import Image from 'next/image'
import rubel from "@/../public/source/testimonial/rubel.jpg"
import nasir from "@/../public/source/testimonial/nasir.jpg"
import dev from "@/../public/source/testimonial/dev.png"
import Social from '@/components/Social'

const Testimonials = () => {
    return (
        <div>
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-indigo-600">Testimonials</h2>
                <p className="text-lg text-gray-600">What others say about us</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
                <div className="p-4 text-gray-800 rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            One Call Kuwait Services Zone
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <Image src={rubel} width={500} height={500} alt={"testimonial"}/>
                            </div>
                            <h5 className="font-bold text-indigo-600">Rubel Sarkar</h5>
                            <p className="text-sm text-gray-600">CEO / Founder</p>
                            <Social/>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            Full Stack Web Developer
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <Image src={nasir} width={500} height={500} alt={"testimonial"}/>
                            </div>
                            <h5 className="font-bold text-indigo-600">Nasir</h5>
                            <p className="text-sm text-gray-600">web developer</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            Full Stack Web Developer
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <Image src={dev} width={500} height={500} alt={"testimonial"}/>
                            </div>
                            <h5 className="font-bold text-indigo-600">Dev Gray</h5>
                            <p className="text-sm text-gray-600">web developer</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;