import PortableTextComponent from '@/components/PortableTextComponent';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/imageBuilder';
import Image from 'next/image';
import Link from 'next/link';

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
						<section className='col-span-2 lg:col-span-1'>
							<div className='grid gap-4'>
								<h1 className='text-4xl'>{data.title}</h1>
								<p className='leading-8 p-4'>{data?.shortDescription}</p>
							</div>
							<div className='grid gap-8 p-4'>
								<Link
									className='btn btn-accent'
									to
									href={`//www.${data.slug.current}.com`}
									rel='noopener noreferrer'
								>
									View Site
								</Link>
							</div>
						</section>

						<div className='grid col-span-2 mt-24 gap-y-4'>
							<PortableTextComponent value={data.body} />
							{data.images ? (
								<>
									<h3 className='text-4xl'>Views:</h3>
									<div className='carousel rounded-box flex gap-4'>
										{data.images?.map((image, index) => {
											console.log(image.asset._ref);

											return (
												<div key={image._key} className='carousel-item   '>
													<img
														alt={`${data.title}-${index}`}
														src={urlFor(image.asset._ref).url()}
														className='overflow-hidden h-[400px]'
													/>
												</div>
											);
										})}
									</div>
								</>
							) : (
								''
							)}
						</div>
					</div>
				);
			})}
		</main>
	);
};
export default page;
