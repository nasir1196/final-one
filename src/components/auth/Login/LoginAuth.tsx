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

const LoginAuth = () => {

    const [logAlert, setLogAlert]= useState("")
    const handleSubmit = (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const logData ={
            email: data.get("email"),
            password: data.get("password"),
        }
        if(logData.email !== "", logData.password !== ""){
            console.log( logData)
            setLogAlert(" ")
        }else{

            setLogAlert("Email & Password Required")
        }
    };
    return (
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
                <Link href="/">
                    <Typography component="h1" variant="h5" sx={{fontWeight:"bolder"}}>
                        ONE CALL KUWAIT
                    </Typography>
                </Link>
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/forgotPassword" >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Typography sx={{color:"red", m:"10px", p:'5px'}}>{logAlert}</Typography>
            </Box>
        </Container>
    )
}

export default LoginAuth