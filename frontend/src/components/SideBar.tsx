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
        { href: '/api/auth/signin', label: 'Login' },
    ];
    const postLogin = [
        { href: '/', label: 'Home' },
        { href: '/reserve', label: 'Reserve' },
        { href: '/myTable', label: 'My Table' },
        { href: '/api/auth/signout', label: "Logout" }
    ];

    return (
        <div className="width-[15%] ml-9">
            <ul>
                {
                    session ?
                        postLogin.map(({ href, label }) => {
                            return (
                                <li key={href} className="text-4xl border-b-4 border-stone-800 pb-9 mb-18">
                                    <Link href={href}>
                                        <p className='text-stone-800'>
                                            {label}
                                        </p>
                                    </Link>
                                </li>
                            );
                        }) :
                        preLogin.map(({ href, label }) => {
                            return (
                                <li key={href} className="text-4xl border-b-4 border-stone-800 pb-9 mb-18">
                                    <Link href={href}>
                                        <p className='text-stone-800'>
                                            {label}
                                        </p>
                                    </Link>
                                </li>
                            );
                        })
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