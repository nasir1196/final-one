"use client"
import React, {Fragment} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {HiMenuAlt2, HiOutlineX} from "react-icons/hi";
import AuthService from "@/components/AuthService/AuthService";
import axios from "axios";


const Navbar = () => {

    const router = useRouter();
    const handleLogout = () => {
        router.push("/login");
    };
    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(' ');
    };

    const pathName = usePathname()

    const navigation = [
        pathName === "/plumbing" ? {name: 'Plumbing', to: '/plumbing', current: true} : {
            name: 'Plumbing',
            to: '/plumbing',
            current: false
        },
        pathName === "/satellite" ? {name: 'Satellite', to: '/satellite', current: true} : {
            name: 'Satellite',
            to: '/satellite',
            current: false
        },
        pathName === "/electric" ? {name: 'Electric', to: '/electric', current: true} : {
            name: 'Electric',
            to: '/electric',
            current: false
        },
        pathName === "/craftPainter" ? {name: 'Craft Painter', to: '/craftPainter', current: true} : {
            name: 'Craft Painter',
            to: '/craftPainter',
            current: false
        },
    ];

    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiOutlineX className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <HiMenuAlt2 className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <h1 className="text-white font-bold">One Call Kuwait</h1>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.to}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button
                                            className="bg-orange-500 text-white p-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            Authentication
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <AuthService/>

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;