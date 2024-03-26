import Image from 'next/image';
import getRestaurant from '@/libs/getRestaurant';

export default async function GetOne({ params }: { params: { rid: string } }) {
    const restaurantDetails = await getRestaurant(params.rid);

    const currentTime = new Date(); // Get current time
    const openTime = new Date();
    const closeTime = new Date();

    // Set hours and minutes for openTime and closeTime based on restaurantDetails.data
    const [openHour, openMinute] = restaurantDetails.data.opentime.split(':').map(Number);
    const [closeHour, closeMinute] = restaurantDetails.data.closetime.split(':').map(Number);
    openTime.setHours(openHour, openMinute, 0, 0);
    closeTime.setHours(closeHour, closeMinute, 0, 0);

    // Compare current time with open and close times
    const flag = currentTime >= openTime && currentTime <= closeTime;


    return (
        <div className="w-[70%] pl-4">
            <h1 className="text-4xl	font-bold mb-16">{restaurantDetails.data.name}</h1>
            <div className="flex flex-row mb-4">
                <div className="w-[50%]">
                    <p className="text-2xl mb-4	">Time</p>
                    <p className="text-4xl mb-4 inline-block border border-stone-800 py-2 px-4">{restaurantDetails.data.opentime}</p>
                    <p className="text-4xl mb-4 inline-block p-2">-</p>
                    <p className="text-4xl mb-4 inline-block border border-stone-800 py-2 px-4">{restaurantDetails.data.closetime}</p>
                    <div className="flex flex-row ">
                        <div>
                            <p className="text-2xl mb-4	">Date</p>
                            <p className="text-4xl mb-4 mr-4 inline-block border border-stone-800 py-2 px-4">Mon-Fri</p>
                        </div>
                        <div>
                            <p className="text-2xl mb-4	">Status</p>
                            {
                                flag ? <p className="text-4xl text-green-600 font-bold mb-4 inline-block border border-stone-800 p-2">OPENED</p> :
                                    <p className="text-4xl text-red-800 font-bold mb-4 inline-block border border-stone-800 p-2">CLOSED</p>
                            }

                        </div>
                    </div>
                    <div>
                        <p className="text-2xl mb-4	">Address</p>
                        <p className="text-base mb-4 mr-4  border border-stone-800 py-2 px-4">
                            <p>{restaurantDetails.data.address}</p>
                            <p>District: {restaurantDetails.data.district}</p>
                            <p>Postal Code: {restaurantDetails.data.postalcode}</p>
                            <p>Region: {restaurantDetails.data.region}</p>
                        </p>
                    </div>

                </div>
                <div className="w-[50%]">
                    <img src="/image_1.png" alt="" className="w-full p-4" />
                </div>
            </div>
            <div className="flex flex-row">
                <button className="text-base w-[20%] mb-4 mr-4 inline-block border p-2 text-center
                    border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                    hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                    hover:-translate-x-1 hover:-translate-y-1">Back</button>
                <button className="text-base w-[80%] mb-4 inline-block border p-2 text-center border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1">Go Reserve</button>
            </div>
        </div>
    );
}