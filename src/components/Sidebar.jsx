'use client';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Sidebar = ({ links }) => {
	const router = usePathname();
	console.log(router);
	return (
		<div className='drawer drawer-end'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				{/* Page content here */}

				<label htmlFor='my-drawer' className='btn btn-link'>
					<Image
						src='/align-right-text.svg'
						width={'40'}
						height={'40'}
						alt='little coder'
					/>
				</label>
			</div>
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer'
					aria-label='close sidebar'
					className='drawer-overlay'
				></label>
				<div className=' bg-base-200 text-base-content min-h-full w-70 p-4 '>
					<ul className=' menu flex flex-col gap-4 place-items-start '>
						{/* Sidebar content here */}
						{links.map((link) => {
							return (
								<Link
									key={link.id}
									href={link.link}
									className={` ${router === link.link ? 'border-b-2' : ''}`}
								>
									<button className='btn btn-ghost capitalize w-full text-xl'>
										{link.name}
									</button>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
