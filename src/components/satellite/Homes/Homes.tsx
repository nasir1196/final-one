"use client"
import React from "react"
import Box from "@mui/material/Box";
import Banner from "@/components/Banner";
import Services from "../Services/Services";

const Homes =()=>{
    return(
        <Box sx={{marginTop:"1rem"}}>
            <Banner/>
            <Services/>
        </Box>
    )
}

export default Homes