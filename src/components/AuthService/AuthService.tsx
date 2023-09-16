'use client'
import React, {useEffect, useState} from "react"
import {Menu} from "@headlessui/react";
import Link from "next/link";
import axios from "axios"
import {useRouter} from "next/navigation";


const AuthService = () => {

    const [user, setUser] = useState({})
    const router = useRouter()
    const [something, setSomething] = useState("something")
    //@ts-ignore
    const {email} = user;
    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(' ');
    };

    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            alert("Logout successful")
            router.push("/login")

        } catch (e: any) {
            alert(e.message)
        }
    }
    const getUsers = async () => {
        const res = await axios.get("/api/users/me").then((res) => {
            const data = res.data;
            setUser(data.data)
        })
    }
    useEffect(() => {
        getUsers().then(r => console.log("One Call Kuwait"))
    }, [something])
    return (
        <div>
            {email ? (
                <div>
                    <Menu.Item>
                        {({active}) => (
                            <Link
                                href={"/profile"}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-center text-gray-700')}
                            >
                                Your Profile
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <Link
                                href={"/setting"}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-center text-sm text-gray-700')}
                            >
                                Settings
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <Link
                                href={"/setting"}
                                onClick={() => logout()}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-center text-sm text-gray-700')}
                            >
                                Logout
                            </Link>
                        )}
                    </Menu.Item>


                </div>
            ) : (
                <div>
                    <Menu.Item>
                        {({active}) => (
                            <Link
                                href={"/login"}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-center text-sm text-gray-700')}
                            >
                                Sign In
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <Link
                                href={"/signup"}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-center text-sm text-gray-700')}
                            >
                                Register
                            </Link>
                        )}
                    </Menu.Item>
                </div>
            )


            }
        </div>
    )
}


export default AuthService;