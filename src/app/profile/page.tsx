"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout successful")
            router.push("/login")

        } catch (e: any) {
            console.log(e.message)
            toast.error(e.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="p-3 m-2 rounded bg-green-500">Profile Page</p>
            <h2>{data === "nothing" ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link> }</h2>
            <hr/>
            <button
                onClick={logout}
                className="bg-red-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout
            </button>
            <button
                onClick={getUserDetails}
                className="bg-purple-900 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get User data
            </button>
        </div>
    )
}