"use client"
import axios from "axios"
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useState} from "react";
import UserProfilePage from "./[id]/page";


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
        <div>
            <UserProfilePage/>
        </div>
    )
}