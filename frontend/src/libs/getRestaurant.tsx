export default async function getRestaurant(id:string) {
    
    
    const response = await fetch(`http://localhost:500/api/v1/restaurants/${id}`)


    return await response.json()
}