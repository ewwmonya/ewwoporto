import ProjectsGrid from '@/components/ProjectsGrid';
import GridCardItem from '@/components/GridCardItem';

const FeaturedProjects = ({ projects }) => {
	return (
		<section className='min-h-[55vh] p-8 flex flex-col gap-y-4 bg-base-200'>
			<p className='text-2xl font-thin font-mono tracking-wider'>
				Featured Work
			</p>
			<ProjectsGrid>
				{projects.map((project) => {
					return <GridCardItem key={project._id} data={project} />;
				})}
			</ProjectsGrid>
		</section>
	);
};
export default FeaturedProjects;
