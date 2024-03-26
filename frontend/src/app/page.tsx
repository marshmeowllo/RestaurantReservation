// pages/index.tsx

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Our Restaurant Reservation</title>
        <meta name="description" content="Book your table now at our restaurant and enjoy a wonderful dining experience." />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Welcome to Our Restaurant Reservation
          </h1>
          <p className="text-gray-600 mt-2">Book your table now!</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-6">
          <div>
            <Image
              src="/Restauranthomepage.jpg"
              alt="Restaurant Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              The restaurant reservation website welcomes visitors with an
              inviting atmosphere and an intuitive interface designed to
              streamline the booking process. Offering a tantalizing glimpse into
              the culinary delights that await, vibrant imagery and concise
              descriptions showcase the restaurant's ambiance and menu offerings.
              Seamlessly integrating Next.js with Tailwind CSS, the website
              strikes a balance between visual appeal and functionality, ensuring
              a delightful user experience for patrons eager to secure their
              dining reservations. Whether discovering the restaurant for the
              first time or returning to savor familiar flavors, navigating the
              website is an effortless journey, guided by its intuitive layout and
              responsive design.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/login">
          <button className="mt-4 inline-block border p-2 text-center border-stone-800 relative overflow-hidden transition-transform duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-stone-500/100 bg-stone-100 hover:bg-stone-800 text-stone-800 hover:text-stone-100 transform 
                        hover:-translate-x-1 hover:-translate-y-1">
            Make a Reservation
          </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
