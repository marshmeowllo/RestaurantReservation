import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import getRestaurants from '@/libs/getRestaurants';
import { RestaurantItem } from '../../interface';

export async function LeftSideBar() {
    const session = await getServerSession(authOptions)
    console.log(session)

    const preLogin = [
        { href: '/', label: 'Home' },
        { href: '/restaurant', label: 'Eatery' },
        { href: '/login', label: 'Login' },
        { href: '/register', label: 'Register' }, // Added "Register" menu
    ];
    const postLogin = [
        { href: '/', label: 'Home' },
        { href: '/restaurant', label: 'Reserve' },
        { href: '/myTable', label: 'My Table' },
        { href: '/api/auth/signout', label: "Logout" }
    ];

    return (
        <div className="width-[15%] ml-9 border-r-2 border-r-gray-200">
            <ul>
                {
                    session ?
                        postLogin.map(({ href, label }) => (
                            <li key={href} className="text-4xl pb-9 mt-4 mb-4 hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                                <Link href={href}>
                                    <p className='text-stone-800 cursor-pointer hover:font-bold'> {/* Made text bold on hover here */}
                                        {label}
                                    </p>
                                </Link>
                            </li>
                        )) :
                        preLogin.map(({ href, label }) => (
                            <li key={href} className="text-4xl pb-9 mt-4 mb-4 hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                                <Link href={href}>
                                    <p className='text-stone-800 cursor-pointer hover:font-bold'> {/* Made text bold on hover here */}
                                        {label}
                                    </p>
                                </Link>
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}




export async function RightSideBar({ RestaurantJson }: { RestaurantJson: Promise<RestaurantItem> }) {

    const session = await getServerSession(authOptions)

    const restaurant: RestaurantItem = await RestaurantJson;

    const preLogin = [
        { href: '/', label: 'Home' },
        { href: '/restaurant', label: 'Eatery' },
        { href: '/api/auth/signin', label: 'Login' },
    ];
    const postLogin = [
        { href: '/', label: 'Home' },
        { href: '/reserve', label: 'Reserve' },
        { href: '/myTable', label: 'My Table' },
        { href: '/api/auth/signout', label: "Logout" }
    ];


    return (
        <div className="width-[15%] mr-9">
            <div className='width-[100%]]'>
                <p className='text-base font-bold'>Ranking</p>
                <ul>
                    
                </ul>
            </div>
        </div>

    );
}