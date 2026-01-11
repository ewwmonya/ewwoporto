import BlogCard from '@/components/BlogCard';
import { client } from '@/sanity/client';

const page = async () => {
	const posts = await client.fetch(
		'*[_type == "post"]{title,slug,_id,shortDescription }'
	);

	return (
		<div className='min-h-[85vh] px-8 lg:px-32 flex flex-col py-8'>
			<p className='text-2xl font-thin font-mono tracking-wider'>Blogs</p>
			{/* Blog card container */}
			<div className='mt-2 '>
				<ul className='flex flex-col gap-4'>
					{posts.length < 0 ? (
						posts.map((post) => {
							return (
								<li key={post._id}>
									<BlogCard post={post} />
								</li>
							);
						})
					) : (
						<li>More Coming Soon</li>
					)}
				</ul>
			</div>
		</div>
	);
};
export default page;
