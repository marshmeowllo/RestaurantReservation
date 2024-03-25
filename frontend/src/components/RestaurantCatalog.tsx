import Link from "next/link";
import Card from "./Card";
import { RestaurantJson, RestaurantItem } from "../../interface";

export default async function RestaurantCatalog({RestaurantJson}:{RestaurantJson:Promise<RestaurantJson>}) {
    const RestaurantReady = await RestaurantJson
    return(
        <>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"center", justifyContent:"space-around",
        flexWrap:"wrap", padding:"10px"}}>
            {
                RestaurantReady.data.map((hospitalItem:RestaurantItem)=>
                <Link href={`/hospital/${hospitalItem.id}`} className='w-1/5'>
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.map}/>
                </Link>
                )
            }
        </div>
        </>
    );
}