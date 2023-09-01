"use client";
import React from 'react';
import { Box, Grid, Typography, Button, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { locationData, locationFirst, locationSecond, locationThird } from './srData';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import TtyIcon from '@mui/icons-material/Tty';
import {primaryOrange} from "../../color";


const ServiceArea = () =>
{
    const primaryBlue = "#002bff"
    return (
        <Box>
            <Box sx={ { textAlign: "center", my: { xs: "2rem", md: "5rem" } } }>
                <Typography variant="h6" sx={ { color: primaryOrange } }>QUALITY SERVICE &LOCAL KNOWLEDGE</Typography>
                <Typography variant="h1" sx={ { fontWeight: { xs: "bold", md: "bolder" } } }>Services Areas</Typography>
            </Box>
            <Box sx={ { width: { md: "70%", xs: "95%" }, m: "0 auto" } }>
                <Grid container spacing={ 2 }>
                    <Grid sx={ {
                        backgroundColor: primaryBlue
                    } }
                        item xs={ 12 }
                        md={ 3 }
                    >
                        {
                            locationData.map( ( area, index ) => (
                                <Box key={ index } sx={ { "&:hover": { backgroundColor: "#262626", color: '#DEA841', fontWeight: 'bolder' }, fontWeight: "bold" } }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <area.logo sx={ { "&:hover": { color: "#FF0000" } } } />
                                        </ListItemIcon>
                                        <ListItemText primary={ area.title } />
                                    </ListItemButton>
                                </Box>
                            ) )
                        }
                    </Grid>
                    <Grid item xs={ 6 } md={ 3 }>
                        {
                            locationFirst.map( ( area, index ) => (
                                <Box key={ index } sx={ { "&:hover": { backgroundColor: "#262626", color: '#007AFF' } } }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <area.logo sx={ { "&:hover": { color: "#FF0000" } } } />
                                        </ListItemIcon>
                                        <ListItemText primary={ area.title } />
                                    </ListItemButton>
                                </Box>
                            ) )
                        }
                    </Grid>
                    <Grid item xs={ 6 } md={ 3 }>
                        {
                            locationSecond.map( ( area, index ) => (
                                <Box key={ index } sx={ { "&:hover": { backgroundColor: "#262626", color: '#007AFF' } } }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <area.logo sx={ { "&:hover": { color: "#FF0000" } } } />
                                        </ListItemIcon>
                                        <ListItemText primary={ area.title } />
                                    </ListItemButton>
                                </Box>
                            ) )
                        }
                    </Grid>
                    <Grid item xs={ 6 } md={ 3 }>
                        {
                            locationThird.map( ( area, index ) => (
                                <Box key={ index } sx={ { "&:hover": { backgroundColor: "#262626", color: '#007AFF' } } }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <area.logo sx={ { "&:hover": { color: "#FF0000" } } } />
                                        </ListItemIcon>
                                        <ListItemText primary={ area.title } />
                                    </ListItemButton>
                                </Box>
                            ) )
                        }
                    </Grid>
                </Grid>
            </Box>
            <Box sx={ { height: { md: "60vh" }, backgroundColor: primaryBlue } }>
                <Box sx={ { textAlign: "center", color: "#FFFFFF", p: { xs: "2rem", md: "5rem" } } }>
                    <Typography>24/7 EMERGENCY SERVICE NEAR YOU.</Typography>
                    <Typography variant="h3" sx={ { fontWeight: { xs: "bold", md: "bolder" } } }>Get a fast response, call us now</Typography>

                    <Box>
                        <Button variant="contained" sx={ { py: "1rem", px: { xs: "1.5rem", md: "3rem" }, m: "0.8rem", backgroundColor: "#041B34", color: "#FFFFFF", "&:hover": { backgroundColor: "#F7BF23", color: '#041B34' } } }>{ <MoreTimeIcon /> } <a href={`tel:+96566515342`}>REQUEST A CALL</a> </Button>
                        <Button variant="contained" sx={ { py: "1rem", px: { xs: "1.5rem", md: "3rem" }, m: "0.8rem", backgroundColor: "#F7BF23", color: "#041B34", "&:hover": { backgroundColor: "#041B34", color: '#FFFFFF' } } }>{ <TtyIcon /> } <a href={`tel:+96566515342`}>66515342</a></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceArea;