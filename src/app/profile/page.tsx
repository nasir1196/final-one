"use client"
import {useRouter} from "next/navigation";
import UserProfilePage from "./[id]/page";


export default function ProfilePage() {
    const router = useRouter()
    return (
        <div>
            <UserProfilePage/>
        </div>
    )
}