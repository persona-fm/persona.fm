"ues client";

import { getData } from "@/app/settings/actions";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function UserProfile() {
    const [displayName, setDisplayName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            await getData().then((a: any) => {
                console.log(a);
                setDisplayName(a?.name);
                setFullName(a?.full_name);
                setEmail(a?.email);
                setProfilePhoto(a?.picture);
            });
        };

        fetchData();
    }, []);
export default function UserProfile() {
    return (
        <div className="card bg-primary w-80 text-secondary mt-10">
            <div className="card-body">
                <div className="flex justify-center">
                    <h2 className="card-title">Your profile</h2>
                </div>
                <img
                    src={profilePhoto}
                    alt="google pfp"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                <p>Display name: {displayName}</p>
                <p>Full Name: {fullName}</p>
                <p>Email: {email}</p>
                <p>Display name: </p>
                <p>Full Name: </p>
                <p>Email: </p>
                <p>Profile photo: </p>
            </div>
        </div>
    );
}
