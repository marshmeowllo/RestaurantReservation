import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import getRestaurants from '@/libs/getRestaurants';

export async function LeftSideBar() {

    const session = await getServerSession(authOptions)


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
                        }) :
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
                        })
                }
            </ul>
        </div>
    );
}

export async function RightSideBar() {

    const session = await getServerSession(authOptions)

    const restaurant = getRestaurants();

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
                    {
                        session ?
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
                            }) :
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
                            })
                    }
                </ul>
            </div>
        </div>

    );
}