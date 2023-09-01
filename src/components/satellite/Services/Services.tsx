import {Box, Typography, Grid, Button} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Plumbing from '../../../public/source/service/Plumbing.png';
import GasFitting from '../../../public/source/service/GasFitting.png';
import BlockedDrains from '../../../public/source/service/BlockedDrains.png';
import ToiledRepairs from '../../../public/source/service/ToiledRepairs.png';
import LeakingTaps from '../../../public/source/service/LeakingTaps.png';
import Emergency from '../../../public/source/service/Emergency.png';
import HotWater from '../../../public/source/service/HotWater.png';
import DrainRepair from '../../../public/source/service/DrainRepair.png';
import Link from "next/link";


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
    return (
        <Box sx={{my: "5rem"}}>
            <Box sx={{textAlign: "center"}}>
                <Typography sx={{color: "#007AFF"}} variant='h6'>OUR SERVICES</Typography>
                <Typography sx={{fontWeight: "bold", my: "0.9rem"}} variant='h3'>Our Satellite Services</Typography>
                <Typography>
                    We work with trust and integrity we are always there for you.
                </Typography>
            </Box>

            <Box sx={{m: "0 auto", width: {xs: "90%", md: "60%"}, my: "2rem"}}>
                <Grid container spacing={4}>
                    {
                        service.map((items, index) => (
                            <Grid item key={index} xs={6} md={3}>
                                <Box sx={{
                                    border: '1px solid gray',
                                    borderRadius: "0.2rem",
                                    p: "1rem",
                                    "&:hover": {backgroundColor: "#E0F3FF"}
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        m: "1.4rem"
                                    }}>
                                        <Image src={items.pic} style={{width: "50%", height: "50%",}} alt="services"/>
                                    </Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bolder",
                                        fontSize: {md: "1.3rem", xs: "0.9rem"}
                                    }}>{items.title}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
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