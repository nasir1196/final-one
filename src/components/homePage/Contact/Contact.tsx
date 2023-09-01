import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneIcon from '@mui/icons-material/Phone';


const Contact = () => {


    const handleSubmit = (e:any) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const cData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            phone: data.get("phone"),
            email: data.get("email"),
            message: data.get("message"),
        }

        console.log(cData)
    };
    const primaryBlue = "#002bff"
    return (
        <Box sx={{ py:{md:"4rem",xs:"1.5rem"},px:"1.5rem", backgroundColor:"orange" ,color:primaryBlue}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box sx={{px: "2rem"}}>
                        <Typography sx={{fontSize: "1rem", color: primaryBlue, fontWeight:"bold"}}>CONTACT US</Typography>
                        <Typography sx={{fontSize: '2.5rem', fontWeight: "bold"}}>Get a fast response, call us
                            now</Typography>
                        <Box sx={{my: {md: "3rem", xs: "1.7rem"}}}>
                            <Typography sx={{width: {md: "50%", xs: "90%"}}}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. pulvinar dapibus leo.</Typography>
                        </Box>
                    </Box>

                    <Box sx={{width: {md: "60%", xs: "90%"}, m: "0 auto"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6}>

                                <Box sx={{display: "flex", alignItems: "center", my: "0.6rem"}}>
                                    <Box>
                                        <PhoneIcon sx={{fontSize: "2rem", fontWeight: "bold"}}/>
                                    </Box>
                                    <a href={`tel:+96566515342`}><Box sx={{mx: "0.8rem"}}>
                                        <Typography>
                                            BOOK ONLINE
                                        </Typography>
                                        <Typography>+96566515342</Typography>
                                    </Box></a>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", my: "0.6rem"}}>
                                    <Box>
                                        <LocationOnIcon sx={{fontSize: "2rem", fontWeight: "bold"}}/>
                                    </Box>
                                    <Box sx={{mx: "0.8rem"}}>
                                        <Typography>
                                            LOCATION
                                        </Typography>
                                        <Typography>Kuwait City</Typography>
                                    </Box>
                                </Box>


                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Box sx={{display: "flex", alignItems: "center", my: "0.6rem"}}>
                                    <Box>
                                        <MarkEmailReadIcon sx={{fontSize: "2rem", fontWeight: "bold"}}/>
                                    </Box>
                                    <a href={`mailto:oncallkuwait1@gmail.com`}>
                                        <Box sx={{mx: "0.8rem"}}>
                                            <Typography>
                                                EMAIL
                                            </Typography>
                                            <Typography>oncallkuwait1@gmail.com</Typography>
                                        </Box>
                                    </a>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", my: "0.6rem"}}>
                                    <Box>
                                        <QueryBuilderIcon sx={{fontSize: "2rem", fontWeight: "bold"}}/>
                                    </Box>
                                    <Box sx={{mx: "0.8rem"}}>
                                        <Typography>
                                            OPEN HOURS
                                        </Typography>
                                        <Typography>24/7 Days</Typography>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{mt: 3}}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="street"
                                    label="Street"
                                    name="street"
                                    autoComplete="street"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="city"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    type="textarea"
                                    id="message"
                                    autoComplete="textarea"
                                />
                            </Grid>

                        </Grid>

                        <Button type="submit"
                                fullWidth
                                sx={{
                                    width: "100%",
                                    color: "#FFFFFF",
                                    backgroundColor: "#1976D2",
                                    m: "1rem",
                                    p: {md: "0.7rem", xs: "0.4rem"},
                                    "&:hover": {backgroundColor: "#F7BF23", color: "black"}
                                }}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;