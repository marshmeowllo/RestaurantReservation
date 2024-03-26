'use client'
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem } from '@mui/material'
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDisptach } from "@/redux/store";
import { addReservation } from "@/redux/features/resSlice";
import { removeReservation } from "@/redux/features/resSlice";
import { reserveItem } from "../../../interface";
import postReservation from "@/libs/postReservation";
import utcPlugin from 'dayjs/plugin/utc';
import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import Image from "next/image";

export default function booking() {
    const urlParams = useSearchParams()
    const rid = urlParams.get('id')
    const rName = urlParams.get('name')
    const { data: session } = useSession()
    //console.log(session?.user.token)

    const dispatch = useDispatch<AppDisptach>()
    const now = dayjs().format('ddd D MMM YYYY');
    const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTime = dayjs().format('HH:mm');
            setCurrentTime(newTime);

            // Check if the minutes have changed
            const currentMinutes = dayjs().minute();
            if (currentMinutes === 0) {
                // Perform your desired action when minutes change
                console.log('Minutes changed');
            }
        }, 1000); // Update every second

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    const [bookDate, setBookDate] = useState<Date | null>(null)
    const [fName, setfName] = useState<string>('')
    const [lname, setlName] = useState<string>('')
    const [cid, setCid] = useState<string>('')
    const [hName, sethName] = useState<string | null>("Chula")
    const makeBooking = async () => {
        console.log(rid)
        const utcTime = dayjs(bookDate).utc()
        console.log(dayjs(bookDate).format("YYYY-MM-DD") + "T" + utcTime.format("HH:mm:ss")) //    "resvDate": "2024-12-24T22:50:00.000Z"
        if (rid && session) {
            const response = await postReservation(rid, dayjs(bookDate).format("YYYY-MM-DD") + "T" + utcTime.format("HH:mm:ss"), session.user.token)
        }
    }

    return (
        <main className="flex flex-col w-[70%] pl-4">

            <div className='flex flex-row mb-4'>
                <div className='w-[50%] flex flex-col'>

                    <div>
                        <p className="text-4xl mb-16 font-bold">Reserve Table</p>

                        <div className="text-2xl mb-6">
                            Resturant Name
                        </div>
                        <p className="text-2xl mb-6">{session?.user.name}</p>
                        <p className="text-2xl mb-6">Date</p>
                        <p className="text-4xl mb-4 inline-block border border-stone-800 p-2">{now}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-9">
                            <p className="text-2xl mb-6 text-left text-stone-800">Time</p>
                            <p className="text-4xl mb-4 inline-block border border-stone-800 p-2">{currentTime}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl mb-6 text-left text-stone-800">Reserve by</p>
                            <p className="text-4xl mb-6 inline-block border border-stone-800 p-2">{rid}</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <img src="/image_1.png" alt="" className="w-full p-4" />
                </div>

            </div>
            <div className="flex flex-row">
                <Link href="/restaurant" className='w-[20%] mr-4 inline-block'>
                    <button className="text-base w-[100%] mb-4 mr-4 inline-block border border-stone-800 p-2 text-center relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1">Back</button>
                </Link>
                <button className="text-base w-[80%] mb-4 mr-4 inline-block border border-stone-800 p-2 text-center relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1">Reserve Now!</button>

            </div>
        </main>
    );
}