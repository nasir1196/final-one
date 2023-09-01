"use client";
import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import double from "@/../public/source/banner/doble.png";
import single from "@/../public/source/banner/single.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import {bannerPics} from '../../bnData';
import Link from 'next/link';
// @ts-ignore
import Carousel from "react-material-ui-carousel";
import Typewriter from "typewriter-effect";


const Banner = () => {

    const isMobileScreen = useMediaQuery("(max-width: 940px)", {noSsr: true});

    const primaryBlue = "#002bff"
    const primaryOrange = "#FFA500"
    const offer = [
        {
            pic: double,
            title: "No call out fees",
            subTitle: "Lorem ipsum dolor sit amet"
        },
        {
            pic: single,
            title: "Senior Discount",
            subTitle: "Lorem ipsum dolor sit amet"
        },
        {
            pic: double,
            title: "Price by job",
            subTitle: "Lorem ipsum dolor sit amet"
        },
    ];
    return (
        <Box>
            <Box sx={{backgroundColor: primaryBlue}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{m: {md: "5rem auto", xs: "3rem auto"}, width: {md: "50%", xs: "100%"}}}>




                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt: {md: "3rem", xs: "1rem"}}}>
                        <Box sx={{height: {md: "90vh"}}}>
                            <Carousel>
                                {
                                    bannerPics.map((pic, index) => (
                                        <Box key={index}>
                                            <Image src={pic.pic} alt="One call"
                                                   style={{width: "450px", height: '500px'}}/>
                                        </Box>
                                    ))
                                }
                            </Carousel>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{mx: "3rem", my: "2rem"}}>
                <Grid container spacing={8}>
                    {
                        offer.map((offer, index) => (
                            <Grid item xs={12} md={4} key={index + 1}>
                                <Box sx={{
                                    display: {md: "flex", xs: "initial"},
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    {
                                        isMobileScreen ? (
                                            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                <Image style={{width: "26%", height: "26%"}} src={offer.pic}
                                                       alt="quality area"/>
                                            </Box>
                                        ) : (
                                            <Image style={{
                                                width: "26%",
                                                height: "26%",
                                                margin: "0 auto",
                                                alignItems: "center"
                                            }} src={offer.pic} alt="quality area"/>
                                        )
                                    }
                                    <Box>
                                        <Typography sx={{
                                            fontSize: {md: "2rem", xs: "1rem"},
                                            textAlign: "center",
                                            fontWeight: "bold"
                                        }}>{offer.title}</Typography>
                                        <Typography sx={{textAlign: "center",}}>{offer.subTitle}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </Box>
    );
};

export default Banner;