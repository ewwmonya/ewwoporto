import FeaturedProjects from '@/components/FeaturedProjects';
import PortableTextComponent from '@/components/PortableTextComponent';
import { client } from '@/sanity/client';

const page = async ({ params }) => {
	const { slug } = await params;
	console.log(slug);
	const post = await client.fetch(`*[_type == "post" && _id == '${slug}'][0]`);
	if (!post) {
		return (
			<div className='prose min-h-[85vh] px-8 lg:px-32 flex flex-col py-8 '>
				<h2 className='text-4xl skeleton'></h2>

				<div className='text-4xl h-24 skeleton' />
				<div className='flex flex-col mt-16 gap-4'>
					<section className='px-8 lg:px-24 skeleton h-[10vh]' />
					<section className='px-8 lg:px-24 skeleton h-[20vh]' />
					<section className='px-8 lg:px-24 skeleton h-[30vh]' />
					<section className='px-8 lg:px-24 skeleton h-[10vh]' />
				</div>
			</div>
		);
	}
	return (
		<main>
			<div className='prose min-h-[85vh] px-8 lg:px-32 flex flex-col py-8'>
				<h2 className='text-4xl'>{post.title}</h2>
				<div className='flex flex-col mt-16'>
					<section className='px-8 lg:px-24'>
						<h2 className='text-2xl'></h2>
						<PortableTextComponent value={post.body} />
					</section>
				</div>
			</div>
		</main>
	);
};
export default page;
