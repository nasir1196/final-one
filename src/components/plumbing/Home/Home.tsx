"use Client";
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import Support from '../Support/Support';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box>
            <Box>
                <Banner />
            </Box>
            <Box>
                <Services />
            </Box>
            <Box>
                <About />
            </Box>

            <Box>
                <Support />
            </Box>

            <Box>
                <Blog />
            </Box>
            <Box>
                <Contact />
            </Box>
        </Box>
    );
};

export default Home;