"use client";
import Link from "next/link";
import React, {useState} from "react"
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function SignupPage() {
    const router = useRouter()



    const [logAlert, setLogAlert]= useState("")
    const handleSubmit = async (event:any) => {

        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const logData ={
                email: data.get("email"),
                password: data.get("password"),
            }
            if(logData.email !== "" && logData.password !== ""){
                setLogAlert("login done ")
            }else{

                setLogAlert("Email & Password Required")
            }

             await axios.post("/api/users/login",
                 logData
            )
            toast.success("Login success")
            router.push("/profile")

        } catch (error: any) {
            toast.error(error.message)
        } finally {
            toast.success("Login success")
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, color:"black", fontWeight:"bold" }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href={"/forgotPassword"} >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={"/signup"} >
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