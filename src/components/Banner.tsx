"use client"
import React from "react";
import Typewriter from "typewriter-effect";
import {usePathname} from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import double from "../../public/source/banner/doble.png";
import single from "../../public/source/banner/single.png";
import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import {bannerPics} from "@/components/bnData";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Banner = () => {
    const pathname = usePathname();

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



    // @ts-ignore
    return(
        <Box>
            <Box sx={{backgroundColor: primaryBlue}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{m: {md: "1rem auto", xs: "1rem auto"}, width: {md: "50%", xs: "100%"}}}>
                            <Box>
                                        <span>
                                            {
                                                pathname === "/" ? "Welcome To One Call Kuwait" :
                                                    pathname === "/plumbing" ? "Welcome To Our Plumber Area" :
                                                        pathname === "/satellite" ? "Welcome To Satellite Service" :
                                                            pathname === "/electric" ? "Welcome To Electric Service" :
                                                                pathname === "/craftPainter" ? "Welcome To Our Craft Painter Service" : " "
                                            }
                                        </span>
                                <Box className="visible">
                                    <Typography variant="h4" className="customize ">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Plumber for Kitchen & Sanitary",
                                                    "Satellite for Dish Service",
                                                    "Electric for Electronics Services",
                                                    "Craft Painter for House Decorations",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />

                                    </Typography>
                                </Box>
                                <Box className="notVisible">
                                    <Typography className="customize ">
                                        One Call Kuwait
                                        <span className="need-more-position">

                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Plumber Services",
                                                "Satellite Services",
                                                "Electric Services",
                                                "Craft Painter Services",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                    </span>
                                    </Typography>
                                </Box>

                                <Link href="/appointment">
                                    <Button sx={{
                                        "&:hover": {color: "#FF0000", backgroundColor: "#F1BAA1"},
                                        color: "#f2830c",
                                        fontSize: "1rem",
                                        py: "1rem",
                                        px: "1.5rem",
                                        mt: "2rem"
                                    }} variant="contained">SCHEDULE AN APPOINTMENT</Button>
                                </Link>
                            </Box>
                            <Box className="need-padding ">
                                <Typography  style={{lineHeight: "34px"}}>
                                    One Call Kuwait is home touch maintenance services section area zone , Always I Do
                                    Hard Work
                                    To
                                    Make it Success <br/>I Always Try To Make Something Better Than
                                    Others.
                                </Typography>
                                <Grid item xs={12} md={12}>
                                    <Box>
                                        <Link href="https://www.facebook.com/profile.php?id=100015670060080">
                                            <FacebookIcon sx={{
                                                fontSize: {md: "2.4rem", xs: "2rem"},
                                                fontWeight: 'bolder',
                                                m: "0.3rem",
                                            }}/>
                                        </Link>
                                        <Link href="https://www.twitter.com/onecallkuwait">
                                            <TwitterIcon sx={{
                                                fontSize: {md: "2.4rem", xs: "2rem"},
                                                fontWeight: 'bolder',
                                                m: "0.3rem",
                                            }}/>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/onecallkuwait">
                                            <LinkedInIcon sx={{
                                                fontSize: {md: "2.4rem", xs: "2rem"},
                                                fontWeight: 'bolder',
                                                m: "0.3rem",
                                            }}/>
                                        </Link>
                                        <a href={`https://wa.me/96566515342`}><WhatsAppIcon sx={{
                                            fontSize: {md: "2.4rem", xs: "2rem"},
                                            fontWeight: 'bolder',
                                            m: "0.3rem",
                                        }}/></a>
                                        <Link href="https://www.instagram.com/2_onecallkuwait_">
                                            <InstagramIcon sx={{
                                                fontSize: {md: "2.4rem", xs: "2rem"},
                                                fontWeight: 'bolder',
                                                m: "0.3rem",
                                            }}/>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Box>
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
                                            <Box sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}>
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
    )
};

export default Banner;