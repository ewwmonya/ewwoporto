import GridCardItem from './GridCardItem';
const ProjectsGrid = ({ children }) => {
	return <div className='grid lg:grid-cols-3 gap-6'>{children}</div>;
};
export default ProjectsGrid;
