import { urlFor } from '@/sanity/imageBuilder';
import Link from 'next/link';

const GridCardItem = ({ data }) => {
	console.log(data.mainImage);
	return (
		<div className='card-md bg-base-100 rounded-xl'>
			<figure>
				<img
					className='rounded-t-xl object-cover w-full'
					src={urlFor(data.mainImage).url()}
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<p className='card-title text-lg'>{data.title}</p>
				<p className='text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					cupiditate esse similique!
				</p>
				<div className='card-actions justify-end'>
					<Link href={`projects/${data._id}`}>
						<button className=' transition-all duration-500 btn btn-outline hover:bg-emerald-700 hover:text-white hover:border-white'>
							View {data.title}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default GridCardItem;
