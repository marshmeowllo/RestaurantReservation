import Image from 'next/image';

export default function GetOne() {
    return (
        <div className="w-[70%] pl-4">
            <h1 className="text-4xl	font-bold mb-16">Restaurant_Name</h1>
            <div className="flex flex-row mb-4">
                <div className="w-[50%]">
                    <p className="text-2xl mb-4	">Time</p>
                    <p className="text-4xl mb-4 inline-block border border-stone-800 py-2 px-4">08.00</p>
                    <p className="text-4xl mb-4 inline-block p-2">-</p>
                    <p className="text-4xl mb-4 inline-block border border-stone-800 py-2 px-4">16:00</p>
                    <div className="flex flex-row ">
                        <div>
                            <p className="text-2xl mb-4	">Date</p>
                            <p className="text-4xl mb-4 mr-4 inline-block border border-stone-800 py-2 px-4">Mon-Fri</p>
                        </div>
                        <div>
                            <p className="text-2xl mb-4	">Status</p>
                            <p className="text-4xl font-bold mb-4 inline-block border border-stone-800 p-2">OPENED</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl mb-4	">Address</p>
                        <p className="text-base mb-4 mr-4 inline-block border border-stone-800 py-2 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nulla et ante aliquam.</p>
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