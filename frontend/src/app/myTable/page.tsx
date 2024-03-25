import getRestaurants from '@/libs/getRestaurants';
import RestaurantCatalog from '@/components/RestaurantCatalog';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

export default function Home() {
  const restaurants = getRestaurants()
  return (
    <main className='w-[70%] text-center'>
        <p className='text-4xl mb-16 text-left'>Your Reservation</p>
      <Suspense fallback={<p>Now Loading...<LinearProgress /></p>}>
        <RestaurantCatalog RestaurantsJson={restaurants} />
      </Suspense>
    </main>
  );
}
