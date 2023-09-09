"use client";
import Link from "next/link";
import React, {useState} from "react"
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function LoginPage() {
    const router = useRouter()


    const [user, setUser] = useState({email: "", password: ""})
    const [logAlert, setLogAlert] = useState("")
    const handleSubmit = async (event: any) => {

        try {
            event.preventDefault();
            if (user.email !== "" && user.password !== "") {

                console.log(user)
                await axios.post("/api/users/login",
                    user
                ).then((res)=>{
                    if(res.data){
                        alert("login success")
                    }else{
                        alert("Try again with right credentials")
                    }
                }).catch((err)=>console.log(err.message))

                toast.success("Login success")
                router.push("/profile")
            } else {

                setTimeout(() => {
                    setLogAlert("Email & Password Required")
                }, 1500)
            }
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
                    marginBottom: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Link href="/">
                    <Typography component="h1" variant="h5" sx={{fontWeight: "bolder"}}>
                        ONE CALL KUWAIT
                    </Typography>
                </Link>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
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
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, color: "black", fontWeight: "bold"}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href={"/forgotPassword"}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={"/signup"}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Typography sx={{color: "red", m: "10px", p: '5px'}}>{logAlert}</Typography>
            </Box>
        </Container>
    )
}