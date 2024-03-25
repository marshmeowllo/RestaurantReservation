import Link from "next/link";
import Card from "./Card";
import { RestaurantJson, RestaurantItem } from "../../interface";

export default async function RestaurantCatalog({RestaurantsJson}:{RestaurantsJson:Promise<RestaurantJson>}) {
    const RestaurantReady = await RestaurantsJson
    console.log(RestaurantReady.success)
    return(
        <>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"center", justifyContent:"space-around",
        flexWrap:"wrap", padding:"10px"}}>
            {
                RestaurantReady.data?
                RestaurantReady.data.map((restaurantItem:RestaurantItem)=>
                <Link href={`/restaurant/${restaurantItem.id}`} className='w-1/5'>
                    <Card hospitalName={restaurantItem.name}/>
                </Link>
                ) : null
            }
        </div>
        </>
    );
}