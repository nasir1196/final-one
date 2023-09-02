"use client"
import React from 'react';
import {Box} from '@mui/material';
import Contact from "@/components/Contact";


const ContactForm = () => {

    const primaryBlue = "#002bff"
    return (
        <Box sx={{ py:{md:"4rem",xs:"1.5rem"},px:"1.5rem", backgroundColor:"orange" ,color:primaryBlue}}>
            <Contact/>
        </Box>
    );
};

export default ContactForm;