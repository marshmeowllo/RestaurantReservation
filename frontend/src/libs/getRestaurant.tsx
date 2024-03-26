export default async function getRestaurant(id:string) {
    
    
    const response = await fetch(`http://localhost:4000/api/v1/restaurants/${id}`)


    return await response.json()
}