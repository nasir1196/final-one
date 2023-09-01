"use client"
import React, {useState} from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";

const ForgotForm = () => {
    const handleSubmit = (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const logData ={
            email: data.get("email"),
        }
        console.log(logData)

    };
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Image src={""} alt="Forgot"/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: "8rem",
                                marginBottom:"3rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Forgot password
                            </Typography>
                            <Typography>
                                Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Reset Password
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="/login" >
                                            Remember your password?
                                        </Link>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ForgotForm