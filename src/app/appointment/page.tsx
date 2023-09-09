"use client";
import React, {useState} from 'react';
import {DatePicker, Select, TimePicker} from 'antd';
import {Box, Button, Grid, TextField} from '@mui/material';
import * as yup from 'yup';
import Image from "next/image"
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import toast from "react-hot-toast";
import {appointmentPic} from "@/components/homePage/AppointmentDate/data";
import {primaryBlue, primaryOrange} from "@/components/color";

const {Option} = Select;
const PickerWithType = ({type, onChange}: any) => {
    if (type === 'time') return <TimePicker onChange={onChange}/>;
    if (type === 'date') return <DatePicker onChange={onChange}/>;
    return <DatePicker picker={type} onChange={onChange}/>;
};
const personSchema = yup.object({

    fullName: yup.string().required('Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    phone: yup.string().required("Number is required"),
    street: yup.string().required("Address is required"),
    city: yup.string().required("City is Required"),
    province: yup.string().required("Province is required"),
});

type Person = yup.InferType<typeof personSchema>


const Appointment = () => {
    const [type, setType] = useState('date');
    const [appointment, setAppointment] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        street: "",
        city: "",
        houseNumber: "",
        describeIssue: ""
    });


    const handleSubmit = async (e: any) => {

        try {
            e.preventDefault();
            if (appointment.firstName !== "" && appointment.lastName !== "" && appointment.email !== "" && appointment.phone !== "" && appointment.street !== "" && appointment.city !== "" && appointment.houseNumber !== " " && appointment.describeIssue !== "") {
                await axios.post("/api/users/appointments",
                    appointment
                ).then((res) => {
                    if (res.data) {
                        alert("Appointment Successfully done")
                        // @ts-ignore
                        setAppointment("")
                    }
                }).catch((error) => {
                    if (error) {
                        alert("Somthing went wrong")
                    }
                })
            } else {
                alert("All Field is Required")
            }

        } catch (error: any) {
            console.log("Appointment failed", error.message)
        }
    };

    // @ts-ignore
    return (<Box sx={{py: "3rem", backgroundColor: primaryOrange}}>
        <Box>
            <Typography
                sx={{fontWeight: "bolder", fontSize: "3rem", color: primaryBlue, textAlign: "center", my: "3rem"}}>Your
                Appointment Our
                Services.</Typography>
        </Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box sx={{m: "1rem"}}>
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
                                    value={appointment.firstName}
                                    onChange={(e) => {
                                        setAppointment({...appointment, firstName: e.target.value})
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
                                    value={appointment.lastName}
                                    onChange={(e) => {
                                        setAppointment({...appointment, lastName: e.target.value})
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
                                    value={appointment.email}
                                    onChange={(e) => {
                                        setAppointment({...appointment, email: e.target.value})
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
                                    value={appointment.phone}
                                    onChange={(e) => {
                                        setAppointment({...appointment, phone: e.target.value})
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="houseNumber"
                                    label="House Number"
                                    name="houseNumber"
                                    autoComplete="houseNumber"
                                    value={appointment.houseNumber}
                                    onChange={(e) => {
                                        setAppointment({...appointment, houseNumber: e.target.value})
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
                                    value={appointment.street}
                                    onChange={(e) => {
                                        setAppointment({...appointment, street: e.target.value})
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
                                    value={appointment.city}
                                    onChange={(e) => {
                                        setAppointment({...appointment, city: e.target.value})
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextArea
                                    required
                                    placeholder={"Describe Your Issues"}
                                    value={appointment.describeIssue}
                                    onChange={(e) => {
                                        setAppointment({...appointment, describeIssue: e.target.value})
                                    }}
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
                            Take Appointment
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Carousel>
                    {appointmentPic.map((pic, index) => (<Box key={index}>
                        <Image src={pic.pic} alt="One call" style={{width: "450px", height: '500px'}}/>
                    </Box>))}
                </Carousel>
            </Grid>
        </Grid>
    </Box>);
};

export default Appointment;