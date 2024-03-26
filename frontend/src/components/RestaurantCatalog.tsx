import Link from "next/link";
import Card from "./Card";
import { RestaurantJson, RestaurantItem } from "../../interface";

export default async function RestaurantCatalog({ RestaurantsJson }: { RestaurantsJson: Promise<RestaurantJson> }) {
    const RestaurantReady = await RestaurantsJson;
    return (
        <>
            <div className="flex flex-row content-center place-content-around flex-wrap">
                {
                    RestaurantReady.data ?
                        RestaurantReady.data.map((restaurantItem: RestaurantItem) =>
                            <Link href={`/restaurant/${restaurantItem.id}`} >
                                <Card restaurantName={restaurantItem.name} imgSrc={"/image_1.png"} address={restaurantItem.address} tel={restaurantItem.tel} time={restaurantItem.opentime + " - " +restaurantItem.closetime} />
                            </Link>
                        ) : null
                }
            </div>
        </>
    );
}