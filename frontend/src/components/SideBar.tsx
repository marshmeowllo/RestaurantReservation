import Link from 'next/link';

export default function SideBar() {

    const listItems = [
        { href: '/', label: 'Home' },
        { href: '/', label: 'Eatery' },
        { href: '/', label: 'Login' },
    ];

    return (
        <div className="width-[15%] ml-9 mr-9">
            <ul>
                {
                    listItems.map(({ href, label }) => {
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