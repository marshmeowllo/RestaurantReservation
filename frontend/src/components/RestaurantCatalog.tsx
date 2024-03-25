import Link from "next/link";
import Card from "./Card";
import { RestaurantJson, RestaurantItem } from "../../interface";

export default async function RestaurantCatalog({ RestaurantsJson }: { RestaurantsJson: Promise<RestaurantJson> }) {
    const RestaurantReady = await RestaurantsJson;
    console.log(RestaurantReady.success)

    return (
        <>
            <div className="flex flex-row content-center place-content-around flex-wrap">
                {
                    RestaurantReady.data ?
                        RestaurantReady.data.map((restaurantItem: RestaurantItem) =>
                            <Link href={`/restaurant/${restaurantItem.id}`} >
                                <Card restaurantName={"Super food"} imgSrc={"/image_1.png"} address={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nulla et ante aliquam."} tel={"0000000"} time={"Mon-fri 00:00 - 00:30"} />
                            </Link>
                        ) : null
                }
            </div>
        </>
    );
}