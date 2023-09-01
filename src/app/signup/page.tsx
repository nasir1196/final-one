"use client";
import React, {useEffect} from "react"
import {useRouter} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";


export default function SignupPage() {

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        street: "",
        city: "",
    })

    const [loading, setLoading] = React.useState(false)


    const handleSubmit = async(event:any) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const makeData ={
                firstName:data.get("firstName"),
                lastName:data.get("lastName"),
                email: data.get("email"),
                phone:data.get("phone"),
                street:data.get("street"),
                city:data.get("city"),
                password: data.get("password"),
            }

            if(makeData.firstName !== "", makeData.lastName !== "",makeData.email !== "", makeData.phone !== "", makeData.street !== "", makeData.city !== "", makeData.password !== ""){
                console.log(makeData);
                // @ts-ignore
                setUser(makeData)
            }else{
                alert("All Field is Required")
            }
            setLoading(true)
            const respond = await axios.post("/api/users/signup",
                user
            )
            router.push("/login")

        } catch (error: any) {
            console.log("Signup failed", error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    };



    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: "7rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom:"2rem",

                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Link href={`/`}>
                    <Typography component="h1" variant="h5">
                        ONE CALL KUWAIT
                    </Typography>
                </Link>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
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
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox value="allowExtraEmails" color="primary" />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, color:"black", fontWeight:"bold" }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}