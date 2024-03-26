'use client'
import DateReserve from "@/components/DateReserve";
import {Select, MenuItem} from '@mui/material'
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDisptach } from "@/redux/store";
import { addReservation } from "@/redux/features/resSlice";
import { removeReservation } from "@/redux/features/resSlice";
import { reserveItem } from "../../../interface";
import postReservation from "@/libs/postReservation";
import { useSession } from "next-auth/react";
import utcPlugin from "dayjs/plugin/utc"

export default function booking() {
    const urlParams = useSearchParams()
    const rid = urlParams.get('id')
    const rName = urlParams.get('name')
    const {data:session} = useSession()
    //console.log(session?.user.token)

    const dispatch = useDispatch<AppDisptach>()

    const currentDate = new Date();
    const [bookDate,setBookDate] = useState<Date>(currentDate)
    const [fName, setfName] = useState<string>('')
    const [lname, setlName] = useState<string>('')
    const [cid, setCid] = useState<string>('')
    /*const makeBooking = ()=>{
        if(cid && fName && lname && bookDate){
            const item:reserveItem = {
                user: fName,
                id: cid,
                restaurant: rid,
                resvDate: dayjs(bookDate).format("YYYY/MM/DD"),
                createdAt: Date.now.toString(),
            }
            console.log(item)
            dispatch(addReservation(item))
            setfName('');
            setlName('');
            setCid('');
            setBookDate(null);
            // Send alert
            alert('Booking successful!');
        }
    }*/
    const makeBooking= async ()=>{
        console.log(rid)
        const utcTime = dayjs(bookDate).utc()
        console.log(dayjs(bookDate).format("YYYY-MM-DD")+"T"+utcTime.format("HH:mm:ss")) //    "resvDate": "2024-12-24T22:50:00.000Z"
        if(rid && session){
            const response = await postReservation(rid,dayjs(bookDate).format("YYYY-MM-DD")+"T"+utcTime.format("HH:mm:ss"),session.user.token)
        }
    }

    return (
        <main className="bg-slate-100 m-5 p-5">
            
            <div className='w-fit space-y-2'>
                
                <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5">
                <label htmlFor="name" className="text-md text-left text-gray-600">Name</label>
                <input type="text" id="name" name="Name" className="MuiInput-input" value={fName}
                onChange={(e)=>{setfName(e.target.value)}}/>
                <label htmlFor="name" className="text-md text-left text-gray-600">Lastname</label>
                <input type="text" id="name" name="Lastname" className="MuiInput-input" value={lname}
                onChange={(e)=>{setlName(e.target.value)}}/>
                <DateReserve onDateTimeChange={(value:Date)=>{setBookDate(value)}}/>
                </div>
            </div>
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                shadow-sm text-white" onClick={makeBooking}>Book Vaccine</button>
                
        </main>
    );
}