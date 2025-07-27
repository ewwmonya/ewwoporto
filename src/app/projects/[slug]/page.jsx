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
				console.log(data.images);
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
						<div className='grid col-span-2 mt-24 gap-8'>
							<PortableTextComponent value={data.body} />
							<div className='carousel rounded-box w-full'>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp'
										className='w-full'
									/>
								</div>
								<div className='carousel-item w-1/2'>
									<img
										src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
										className='w-full'
									/>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</main>
	);
};
export default page;
