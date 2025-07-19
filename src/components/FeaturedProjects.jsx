import ProjectsGrid from '@/components/ProjectsGrid';
import GridCardItem from '@/components/GridCardItem';

const FeaturedProjects = () => {
	return (
		<section className='min-h-[55vh] p-8 flex flex-col gap-y-4 bg-base-200'>
			<p className='text-2xl font-thin font-mono tracking-wider'>
				Featured Work
			</p>
			<ProjectsGrid>
				<GridCardItem />
				<GridCardItem />
				<GridCardItem />
			</ProjectsGrid>
		</section>
	);
};
export default FeaturedProjects;
