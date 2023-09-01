"use client"
import React from 'react';
import {Box, Grid, ListItemText, ListItemButton, Typography, useMediaQuery, FilledInput,} from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Link from 'next/link';
import {aboutUs, ourService, quickLink, ourRegion} from './data';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    const isMobileScreen = useMediaQuery("(max-width: 940px)", {noSsr: true});
    const date = new Date();
    const fullYear = date.getFullYear();

    return (
        <Box sx={{backgroundColor: "#041B34"}}>
            <Box sx={{p: {md: "2rem", xs: "1rem"}}}>
                <Box sx={{m: {md: "2rem", xs: "1rem"}, borderBottom: "0.1rem dotted gray", p: "2rem"}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Link href="/">
                                <Typography sx={{
                                    color: "#FFFFFF",
                                    fontWeight: {md: "bolder", xs: "bold"},
                                    fontSize: {md: "3rem", xs: "2rem"},
                                    "&:hover": {color: "#F7BF23", cursor: "pointer"}
                                }}>One Call Kuwait</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{display: {md: "flex", xs: "initial"},}}>
                                <Box sx={{
                                    height: "5rem",
                                    width: "5rem",
                                    borderRadius: "50%",
                                    backgroundColor: "#007AFF",
                                    m: "0.9rem",
                                    display: {md: "block", xs: "none"},
                                }}>
                                    <a href={`tel:+96566515342`}><Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        m: "15px auto"
                                    }}>
                                        <CallOutlinedIcon sx={{color: "#FFFFFF", fontSize: "3.4rem"}}/>
                                    </Box></a>
                                </Box>

                                <Box sx={{cursor: "pointer"}}>
                                    <Typography sx={{
                                        color: "#FFFFFF",
                                        fontWeight: {md: "bolder", xs: "bold"},
                                        fontSize: {md: "2rem", xs: "1.5rem"},
                                        "&:hover": {color: "#007AFF"}
                                    }}><a href={`tel:+96566515342`}>Book Online or Call</a></Typography>
                                    <Typography sx={{
                                        fontWeight: {md: "bolder", xs: "bold"},
                                        color: "#FFFFFF",
                                        "&:hover": {color: "#007AFF"},
                                        fontSize: {md: "3.5rem", xs: "2.3rem"}
                                    }}>
                                        <a href={`tel:+96566515342`}>66515342</a>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{borderBottom: "0.1rem dotted gray",}}>
                    <Grid container spacing={4} sx={{py: "2rem"}}>
                        <Grid item xs={10} md={3} sx={{py: {md: "3rem", xs: "1.5rem"}}}>
                            <Box sx={{borderBottom: "0.1rem dotted gray", p: "0.4rem"}}>
                                <Typography sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bolder",
                                    color: "#F7BF23",
                                    "&:hover": {color: "#007AFF"},
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>ABOUT</Typography>
                            </Box>
                            <Box sx={{color: "#ffa500", textAlign: {xs: "center"}}}>
                                {
                                    aboutUs.map((item, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemText primary={<Link href={item.pathName}>{item.title}</Link>}/>
                                        </ListItemButton>
                                    ))
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={10} md={3}>
                            <Box sx={{borderBottom: "0.1rem dotted gray", p: "0.4rem"}}>
                                <Typography sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bolder",
                                    color: "#F7BF23",
                                    "&:hover": {color: "#007AFF"},
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>OUR SERVICES</Typography>
                            </Box>
                            <Box sx={{color: "#ffa500"}}>
                                {
                                    ourService.map((item, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemText primary={<Link href={item.pathName}>{item.title}</Link>}/>
                                        </ListItemButton>
                                    ))
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={10} md={3}>
                            <Box sx={{borderBottom: "0.1rem dotted gray", p: "0.4rem"}}>
                                <Typography sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bolder",
                                    color: "#F7BF23",
                                    "&:hover": {color: "#007AFF"},
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>QUICK LINKS</Typography>
                            </Box>
                            <Box sx={{color: "#ffa500", textAlign: {xs: "center"}}}>
                                {
                                    quickLink.map((item, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemText primary={<Link href={item.pathName}>{item.title}</Link>}/>
                                        </ListItemButton>
                                    ))
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={10} md={3}>
                            <Box sx={{borderBottom: "0.1rem dotted gray", p: "0.4rem"}}>
                                <Typography sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bolder",
                                    color: "#F7BF23",
                                    "&:hover": {color: "#007AFF"},
                                    cursor: "pointer",
                                    textAlign: "center"
                                }}>OUR REGIONS</Typography>
                            </Box>
                            <Box sx={{color: "#ffa500", textAlign: {xs: "center"}}}>
                                {
                                    ourRegion.map((item, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemText primary={<Link href={item.pathName}>{item.title}</Link>}/>
                                        </ListItemButton>
                                    ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{my: {md: "4rem", xs: "1.5rem"}, color: "#ffa500", m: "1.2rem"}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Box sx={{
                                display: {md: "flex", xs: "initial"},
                                justifyContent: {md: "start", xs: "center"},
                                alignItems: {xs: "center", md: "start"},
                                cursor: "pointer"
                            }}>

                                <AddLocationAltIcon sx={{
                                    fontWeight: "bold",
                                    fontSize: {xs: '4rem', md: "2rem"},
                                    m: {xs: "0 8.1rem auto", md: "0 0.6rem auto"}
                                }}/>

                                <Box sx={{
                                    fontWeight: 'bold',
                                    fontSize: "4rem",
                                    textAlign: {xs: "center", md: "start"},
                                    "&:hover": {color: "#F7BF23"}
                                }}>
                                    <Typography>LOCATION</Typography>
                                    <Typography>Kuwait - Kuwait 6 Cites</Typography>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box sx={{
                                display: {md: "flex", xs: "initial"},
                                justifyContent: {md: "start", xs: "center"},
                                alignItems: {xs: "center", md: "start"},
                                cursor: "pointer"
                            }}>

                                <ForwardToInboxIcon sx={{
                                    fontWeight: "bold",
                                    fontSize: {xs: '4rem', md: "2rem"},
                                    m: {xs: "0 8.1rem auto", md: "0 0.6rem auto"}
                                }}/>

                                <Box sx={{
                                    fontWeight: 'bold',
                                    fontSize: "4rem",
                                    textAlign: {xs: "center", md: "start"},
                                    "&:hover": {color: "#F7BF23", cursor: "pointer"}
                                }}>
                                    <Typography>Email</Typography>
                                    <Typography><a href={`mailto:onecallkuwait1@gmail.com`}>onecallkuwait1@gmail.com</a></Typography>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Box sx={{
                                display: {md: "flex", xs: "initial"},
                                justifyContent: {md: "start", xs: "center"},
                                alignItems: {xs: "center", md: "start"},
                                cursor: "pointer"
                            }}>

                                <QueryBuilderIcon sx={{
                                    fontWeight: "bold",
                                    fontSize: {xs: '4rem', md: "2rem"},
                                    m: {xs: "0 8.1rem auto", md: "0 0.6rem auto"}
                                }}/>

                                <Box sx={{
                                    fontWeight: 'bold',
                                    fontSize: "4rem",
                                    textAlign: {xs: "center", md: "start"},
                                    "&:hover": {color: "#F7BF23"}
                                }}>
                                    <Typography>Open Hour</Typography>
                                    <Typography>Mon-Sun 24/7</Typography>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
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
                    </Grid>
                </Box>

            </Box>
            <Box sx={{
                backgroundColor: "#101010",
                p: {md: "1.5rem", xs: "0.8rem"},
                textAlign: "center",
                color: "#ffa500"
            }}>
                <Typography>Copyright &copy; {fullYear} E.P.S.C | Powered by One-Call-Kuwait</Typography>
            </Box>
        </Box>
    );
};

export default Footer;