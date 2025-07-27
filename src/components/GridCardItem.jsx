import { urlFor } from '@/sanity/imageBuilder';
import Image from 'next/image';
import Link from 'next/link';

const GridCardItem = ({ data }) => {
	return (
		<div className='card-sm card bg-base-100 rounded-xl'>
			<div className=''>
				<Link href={`projects/${data._id}`}>
					<figure className=' '>
						<Image
							width={500}
							height={50}
							className='rounded-t-xl max-h-[200px] '
							src={urlFor(data.mainImage).url()}
							alt='Shoes'
						/>
					</figure>
				</Link>
			</div>
			<div className='card-body'>
				<Link href={`projects/${data._id}`}>
					<p className='card-title text-lg'>{data.title}</p>
				</Link>
				<p className='text-gray-500'>{data.shortDescription}</p>
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
