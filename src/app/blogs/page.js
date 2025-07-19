import BlogCard from '@/components/BlogCard';
const page = () => {
	return (
		<div className='min-h-[85vh] px-8 lg:px-32 flex flex-col py-8'>
			<p className='text-2xl font-thin font-mono tracking-wider'>Blogs</p>
			{/* Blog card container */}
			<div className='mt-2 flex flex-col gap-4'>
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};
export default page;
