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

export default function booking() {

    const dispatch = useDispatch<AppDisptach>()


    const [bookDate,setBookDate] = useState<Date|null>(null)
    const [fName, setfName] = useState<string>('')
    const [lname, setlName] = useState<string>('')
    const [cid, setCid] = useState<string>('')
    const [hName, sethName] = useState<string|null>("Chula")
    const makeBooking = ()=>{
        if(cid && fName && lname && bookDate && hName){
            const item:reserveItem = {
                user: fName,
                id: cid,
                restaurant: hName,
                resvDate: dayjs(bookDate).format("YYYY/MM/DD"),
                createdAt: Date.now.toString(),
            }
            console.log(item)
            dispatch(addReservation(item))
            setfName('');
            setlName('');
            setCid('');
            sethName('');
            setBookDate(null);
            // Send alert
            alert('Booking successful!');
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