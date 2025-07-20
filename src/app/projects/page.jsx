import { client } from '@/sanity/client';
import GridCardItem from '@/components/GridCardItem';
import ProjectsGrid from '@/components/ProjectsGrid';

const page = async () => {
	const projects = await client.fetch(`*[_type == "Project"]`);

	return (
		<main className='bg-base-200 px-8 lg:px-32 flex flex-col'>
			<div className='py-8'>
				<p className='text-2xl font-thin font-mono tracking-wider'>Projects</p>
				<p className='mt-2 lg:max-w-[70vw] text-gray-500'>
					Explore a diverse collection of web development projects, categorized
					by technology and type. I mainly use React, Tailwind CSS, ShadCDN Ui,
					DaisyUi, and many others.
					<br />I do plan on making projects with Laravel, and a few C++
					Frameworks in the near future.
				</p>
			</div>
			<ProjectsGrid>
				{/* Map Here */}
				{projects.map((project) => {
					return <GridCardItem key={project._id} data={project} />;
				})}
			</ProjectsGrid>
			<div className='join  flex justify-center pt-12 pb-24'>
				<button className='join-item btn'>1</button>
				<button className='join-item btn btn-active'>2</button>
				<button className='join-item btn'>3</button>
				<button className='join-item btn'>4</button>
			</div>
		</main>
	);
};
export default page;
