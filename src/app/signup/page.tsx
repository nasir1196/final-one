"use client";
import React from "react"
import {useRouter} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
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


    const handleSubmit = async (event: any) => {
        try {
            event.preventDefault();
            console.log(user)
            if (user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.phone !== "" && user.street !== "" && user.city !== "" && user.password !== "") {
                await axios.post("/api/users/signup",
                    user
                )
                router.push("/login")
            } else {
                alert("All Field is Required")
            }
        } catch (error: any) {
            console.log("Signup failed", error.message)
            toast.error(error.message)
        } finally {
            console.log("done")
        }
    };


    return (
        <Container component={"main"} maxWidth={"xs"}>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: "7rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "2rem",

                }}
            >
                <Avatar sx={{m: 1,}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Link href={"/"}>
                    <Typography component={"h1"} variant={"h5"}>
                        ONE CALL KUWAIT
                    </Typography>
                </Link>
                <Typography component={"h1"} variant={"h5"}>
                    Sign up
                </Typography>
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
                                value={user.firstName}
                                onChange={(e) => {
                                    setUser({...user, firstName: e.target.value})
                                }}
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
                                value={user.lastName}
                                onChange={(e) => {
                                    setUser({...user, lastName: e.target.value})
                                }}
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
                                value={user.email}
                                onChange={(e) => {
                                    setUser({...user, email: e.target.value})
                                }}
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
                                value={user.phone}
                                onChange={(e) => {
                                    setUser({...user, phone: e.target.value})
                                }}
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
                                value={user.street}
                                onChange={(e) => {
                                    setUser({...user, street: e.target.value})
                                }}
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
                                value={user.city}
                                onChange={(e) => {
                                    setUser({...user, city: e.target.value})
                                }}
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
                                value={user.password}
                                onChange={(e) => {
                                    setUser({...user, password: e.target.value})
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox value="allowExtraEmails" color="primary"/>
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, color: "black", fontWeight: "bold"}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href={"/login"}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}