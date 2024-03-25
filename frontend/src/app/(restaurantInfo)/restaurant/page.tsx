import getRestaurants from '@/libs/getRestaurants';
import CardPanel from '@/components/CardPanel'
import RestaurantCatalog from '@/components/RestaurantCatalog';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

export default function Home() {
  const restaurants = getRestaurants()
  return (
    <main className='text-center p-5'>
      <h1 className='text-xl font-medium'>Select Your Hospital</h1>
      <Suspense fallback={<p>Now Loading...<LinearProgress/></p>}>
      <RestaurantCatalog RestaurantsJson={restaurants}/>
      </Suspense>
    </main>
  );
}
