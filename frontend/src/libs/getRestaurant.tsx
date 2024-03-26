export default async function getRestaurant(id:string) {
<<<<<<< HEAD
    const response = await fetch(`https://localhost:4000/api/v1/restaurants/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
||||||| 74ae883
    const response = await fetch(`https://localhost:2000/api/v1/restaurants/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
=======
    
    
    const response = await fetch(`http://localhost:500/api/v1/restaurants/${id}`)


>>>>>>> bbd07daa1d85554741e5911ec09f71f69276b315
    return await response.json()
}