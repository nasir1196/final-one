"use client"
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


export default function UserProfilePage() {
    const [user, setUser] = useState({})
    const params = useParams();
    const router = useRouter();
    const [something, setSomething] = useState("Hello")
    const [allUser, setAllUser] = useState({})

    //@ts-ignore
    const {firstName, lastName, phone, street, city, email} = user;

    const getUsers = async () => {
        const res = await axios.get("/api/users/me").then((res) => {
            const data = res.data;
            setUser(data.data)
        })
    }

    useEffect(() => {
        getUsers().then(r => console.log("One Call Kuwait"))
    }, [something]);

    // const getAllUsers = async () => {
    //     const res = await axios.get("/api/users/userdata").then((res) => {
    //         const data = res.data;
    //         setAllUser(data.data)
    //     })
    // }

    // useEffect(() => {
    //     getAllUsers()
    // }, [something]);



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-5">
            <div>
                <p className="text-4xl">One Call Kuwait
                </p>
                <p className={"text-3xl"}>Hey... <span className={"capitalize text-pink-700"}>{firstName}</span> have a
                    good day.</p>
            </div>
            <div
                className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
                <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                     style={{backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")'}}>
                    <div
                        className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                        <img className="h-full w-full rounded-full" src="https://i.ibb.co/6YbS9ff/avatar11.png" alt=""/>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-bluePrimary text-xl font-bold"><span
                        className={"capitalize font-extrabold text-2xl text-purple-700"}>{firstName}</span> <span
                        className={"capitalize font-extrabold text-2xl text-pink-500"}>{lastName}</span></h4>
                    <p className="text-lightSecondary text-base font-normal">Dear Customer Explore Our latest
                        Services...</p>
                </div>
                <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className={"text-center"}>Email</h1>
                            <a href={`mailto:${email}`}><h3 className="text-bluePrimary text-2xl font-bold">{email}</h3></a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className={"text-center"}>Phone</h1>
                            <a href={`tel:+${phone}`}><h3 className="text-bluePrimary text-2xl font-bold">{phone}</h3></a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className={"text-center"}>City</h1>
                            <h3 className="text-bluePrimary text-2xl font-bold">{city}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <h1 className={"text-center"}>Street</h1>
                            <h3 className="text-bluePrimary text-2xl font-bold">{street}</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}