
export default async function getRestaurant(id:string) {
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await fetch(`https://localhost:4000/api/v1/restaurants/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
||||||| 74ae883
    const response = await fetch(`https://localhost:4000/api/v1/restaurants/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
=======
    
    
||||||| 4bb0930
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
    
    
=======
>>>>>>> 1177f9f64700067a205d644ebe02f2121c3194cf
    const response = await fetch(`http://localhost:4000/api/v1/restaurants/${id}`)
    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
    return await response.json()
}