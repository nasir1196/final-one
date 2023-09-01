"use client"
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import aboutPic from "@/../public/source/about/about.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const About = () =>
{
    return (
        <Box sx={ { backgroundColor: "#E0F3FF", height: { md: "95vh" } } }>
            <Box sx={ { width: { md: "70%", xs: "100%" }, p: { md: "4rem", xs: "2rem" }, display: "flex", alignItems: 'center', justifyContent: 'center', m: "5rem auto" } }>
                <Grid container spacing={ 8 }  >
                    <Grid item xs={ 12 } md={ 6 }>
                        <Image style={ { width: "100%", height: '100%', borderRadius: "0.3rem" } } src={ aboutPic } alt="aboutUs" />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <Box sx={ { textAlign: { md: "start", xs: "center" } } }>
                            <Typography variant="h6"> ABOUT US </Typography>
                            <Typography variant="h2" sx={ { fontWeight: "bolder", "&:hover": { color: "#D3CA02", cursor: "pointer" } } }> Who we are </Typography>
                            <Typography variant="h6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec  mattis, pulvinar dapibus leo  Ad vulputate elementum cum ligula sagittis hendrerit porta pulvinar </Typography>

                            <Box sx={ { my: '2rem' } }>
                                <Button sx={ { px: "2rem", py: "0.7rem" } } variant="outlined">READ MORE { <ArrowRightAltIcon /> }</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;