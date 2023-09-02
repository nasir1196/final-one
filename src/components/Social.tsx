"use client"
import React from "react"
import {Box, Grid} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";


const Social =()=>{
    return(
        <Box>
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
    )
}

export default Social;