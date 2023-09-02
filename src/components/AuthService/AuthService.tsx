'use client'
import React, {useEffect, useState} from "react"
import {Menu} from "@headlessui/react";
import Link from "next/link";
import axios from "axios"

const AuthService = () => {

    const [user, setUser] = useState({email:""})

    // useEffect(async () => {
    //     await axios.get("/api/users/userdata").then((data) => {
    //         // @ts-ignore
    //         return setUser(data)
    //     }).catch((error: any) => {
    //         console.log(error.message)
    //     })
    // }, [user]);


    const token = user.email !== ""

    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <div>
            {
                token ? (<div>
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
                                href={"/logout"}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-center text-sm text-gray-700')}
                            >
                                Sign out
                            </Link>
                        )}
                    </Menu.Item>
                </div>) : (<div>
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
                </div>)
            }
        </div>
    )
}


export default AuthService;