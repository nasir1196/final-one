import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import Link from 'next/link';
import plumberPic from "@/../public/source/oneCall/plumber/comod-man.png";
import satellitePic from "@/../public/source/oneCall/satellight/dish-antena (3).png";
import electricPic from "@/../public/source/oneCall/electric/man-show.png";
import craftPainterPic from "@/../public/source/oneCall/carftPrint/pngegg (3).png";
import Image from "next/image";

const serviceData = [
    {
        pic: plumberPic,
        title: "Take Plumber"
    },
    {
        pic: satellitePic,
        title: "View Satellite"
    },
    {
        pic: electricPic,
        title: "Great Electrician"
    },
    {
        pic: craftPainterPic,
        title: "Craft Painter"
    },
]

const Services = () => {
    const primaryBlue = "#002bff"
    return (
        <Box sx={{m: '0 auto', p: "3rem"}}>
            <Box sx={{color: primaryBlue, fontWeight: "bold", textAlign: "center", p: "1rem", fontSize:"1.5rem"}}>We work with trust and
                integrity we are always there for you.</Box>
            <Box>
                <Typography sx={{textAlign: "center", fontSize: '3rem', fontWeight: "bold"}}>OUR SERVICES</Typography>
            </Box>
            <Grid container spacing={3}>
                {
                    serviceData.map((items, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Link href="/plumbing">
                                <Box sx={{
                                    border: '1px solid gray',
                                    borderRadius: '5px',
                                    boxShadow: '2px 2px 1px 1px #efe2b3'
                                }}>
                                    <Image className="image-container"  sizes="(max-width: 768px) 100vw"
                                           width={300} height={300} layout="responsive" src={items.pic} alt="plumber"/>
                                    <Typography sx={{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: {md: "1.7rem", xs: "1rem"},
                                        margin: "0.7rem",
                                        padding: "0.5rem"
                                    }}> {items.title}</Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Services