"use client";
import React, {useState} from 'react';
import {DatePicker, Select, Space, TimePicker} from 'antd';
import {Box, Button, TextField, Grid} from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Image from "next/image"
import {appointmentPic} from './data';
import Typography from "@mui/material/Typography";
import {primaryBlue, primaryOrange} from "../../color";
import Carousel from "react-material-ui-carousel";


const {Option} = Select;
const PickerWithType = ({type, onChange}:any) => {
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


const AppointmentDate = () => {
    const [type, setType] = useState('date');
    const [appointment, setAppointment] = useState('');


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

export default AppointmentDate;