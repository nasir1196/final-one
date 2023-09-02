"use Client";
import React from 'react';
import Banner from "@/components/Banner"
import { Box } from '@mui/material';
import Contact from "@/components/Contact";
import Blog from "@/components/plumbing/Blog/Blog";
import Support from "@/components/plumbing/Support/Support";
import About from "@/components/plumbing/About/About";
import Services from "@/components/plumbing/Services/Services";

const Home = () => {
    return (
        <Box>
                <Banner />
                <Services />
                <About />
                <Support />
                <Blog />
                <Contact />
        </Box>
    );

};

export default Home;