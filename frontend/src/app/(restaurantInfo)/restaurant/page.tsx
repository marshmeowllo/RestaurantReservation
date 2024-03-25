import getRestaurants from '@/libs/getRestaurants';
import CardPanel from '@/components/CardPanel'
import RestaurantCatalog from '@/components/RestaurantCatalog';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

export default function Home() {
  const restaurants = getRestaurants()
  return (
    <main className='w-[70%] text-center'>
      <Suspense fallback={<p>Now Loading...<LinearProgress /></p>}>
        <RestaurantCatalog RestaurantsJson={restaurants} />
      </Suspense>
    </main>
  );
}
