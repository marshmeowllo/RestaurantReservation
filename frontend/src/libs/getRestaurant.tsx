export default async function getRestaurant(id:string) {
    const response = await fetch(`Backend url here/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
    return await response.json()
}