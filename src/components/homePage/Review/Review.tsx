"use client"
import React from 'react';
import {Box, CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {customers} from './data';
import Slider from "react-slick";

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    const primaryBlue = "#002bff"
    return (
        <div>review</div>
    );
};

export default Review;