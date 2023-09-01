"use client"
import {Box, Typography, Grid, Button, CardActionArea} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Plumbing from '@/../public/source/service/Plumbing.png';
import GasFitting from '@/../public/source/service/GasFitting.png';
import BlockedDrains from '@/../public/source/service/BlockedDrains.png';
import ToiledRepairs from '@/../public/source/service/ToiledRepairs.png';
import LeakingTaps from '@/../public/source/service/LeakingTaps.png';
import Emergency from '@/../public/source/service/Emergency.png';
import HotWater from '@/../public/source/service/HotWater.png';
import DrainRepair from '@/../public/source/service/DrainRepair.png';
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";


const Services = () => {
    const service = [
        {
            pic: Plumbing,
            title: "Plumbing"
        },
        {
            pic: GasFitting,
            title: "Gas Fitting"
        },
        {
            pic: BlockedDrains,
            title: "Blocked Drains"
        },
        {
            pic: ToiledRepairs,
            title: "Toiled Repairs"
        },
        {
            pic: LeakingTaps,
            title: "Leaking Taps"
        },
        {
            pic: Emergency,
            title: "Emergency"
        },
        {
            pic: HotWater,
            title: "Hot Water"
        },
        {
            pic: DrainRepair,
            title: "Drain Repair"
        },
    ];

    const isMobileScreen = useMediaQuery('(max-width:1000px)', {noSsr: true})
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const settingsTwo = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const themeSetting = isMobileScreen ? settingsTwo : settings;
    return (
        <Box sx={{my: "5rem"}}>
            <Box sx={{textAlign: "center"}}>
                <Typography sx={{color: "#007AFF"}} variant='h6'>OUR SERVICES</Typography>
                <Typography sx={{fontWeight: "bold", my: "0.9rem"}} variant='h3'>Our Craft Painter Services</Typography>
                <Typography>
                    We work with trust and integrity we are always there for you.
                </Typography>
            </Box>

            <Box sx={{m: "0 auto", width: {xs: "90%", md: "60%"}, my: "2rem"}}>
                <Grid container spacing={2}>

                    <Image src={Plumbing} alt="slider"/>

                </Grid>
            </Box>
            <Box sx={{my: '4rem', display: "flex", alignItems: 'center', justifyContent: "center"}}>
                <Link href="/servicePage">
                    <Button sx={{
                        backgroundColor: '#007AFF',
                        color: "#FFFFFF",
                        py: "0.7rem",
                        px: "3rem",
                        "&:hover": {backgroundColor: '#F7BF23', color: "#041B34", mt: "-0.5rem"}
                    }} variant="contained">View All Services</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Services;