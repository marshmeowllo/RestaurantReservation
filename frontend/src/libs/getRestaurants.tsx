export default async function getRestaurants() {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch("http://localhost:200/api/v1/restaurants")
    if(!response){
        throw new Error("Failed to fetch restaurants")
    }
    return await response.json()
}