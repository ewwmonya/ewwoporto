import PortableTextComponent from '@/components/PortableTextComponent';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/imageBuilder';
import Image from 'next/image';

const page = async ({ params }) => {
	const { slug } = await params;
	const project = await client.fetch(
		`*[_type == "Project" && _id == '${slug}']`
	);

	return (
		<main className='mt-16 px-8 lg:px-32 min-h-[85vh] mb-16'>
			{project.map((data) => {
				return (
					<div
						key={data.title}
						className='min-h-[35vh] grid grid-cols-1 lg:grid-cols-2 gap-4'
					>
						<section className=' w-full'>
							{/* left side */}
							<figure className=''>
								<Image
									width={1000}
									height={500}
									className='object-cover '
									src={urlFor(data.mainImage).url()}
									alt='Shoes'
								/>
							</figure>
						</section>
						{/* right side */}
						<section className='col-span-2'>
							<div className='grid gap-4'>
								<h1 className='text-4xl'>{data.title}</h1>
								<p className='leading-8'>{data.shortDescription}</p>
								<p className=''>
									<span className='font-bold'>Tech Used: </span>
									React Edit This
								</p>
							</div>
							<div className='grid gap-8 p-4'>
								<button className='btn btn-accent'>View Site</button>
								<button className='btn'>View Github</button>
							</div>
						</section>
						<div className='grid col-span-2 mt-24'>
							<PortableTextComponent value={data.body} />
						</div>
					</div>
				);
			})}
		</main>
	);
};
export default page;
