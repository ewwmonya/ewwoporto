'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Sidebar from './Sidebar';
const links = [
	{ id: 2, name: 'projects', link: '/projects' },
	{ id: 3, name: 'blogs', link: '/blogs' },
	{ id: 4, name: 'about', link: '/about' },
	{ id: 5, name: 'contact', link: '/contact' },
];
const NavbarComponent = () => {
	const router = usePathname();
	console.log(router);
	return (
		<nav className='navbar bg-base-200  grid lg:grid-cols-3 grid-cols-2 px-4 lg:px-16 '>
			{/* Logo */}
			<div className='navbar-start gap-4'>
				<Link href='/'>
					<h1 className='transition-all duration-300 text-2xl text-nowrap font-extrabold hover:text-emerald-700 hover:tracking-wider'>
						Monya Allen
					</h1>
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex gap-x-8'>
				{links.map((link) => {
					return (
						<Link
							key={link.id}
							href={link.link}
							className={` ${router === link.link ? 'border-b-2' : ''}`}
						>
							<button className='transition-all duration-500 btn btn-ghost bg-transparent hover:border-green-900 capitalize w-full text-xl'>
								{link.name}
							</button>
						</Link>
					);
				})}
			</div>
			<div className='navbar-end place-self-end'>
				<div className='flex flex-nowrap lg:hidden'>
					<Sidebar links={links} />
				</div>
				<Image
					className='hidden lg:block'
					width={'100'}
					height={'100'}
					src={'/undraw_code-thinking_0vf2.svg'}
					alt='little coder'
				/>
			</div>
		</nav>
	);
};
export default NavbarComponent;
