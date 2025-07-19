import Link from 'next/link';

const BlogCard = () => {
	return (
		<div className='card card-border bg-base-200 rounded-lg'>
			<div className='card-body'>
				<h2 className='card-title'>Card Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					ad necessitatibus sed sit iure, pariatur architecto atque dicta alias
					aperiam? A voluptatibus aspernatur exercitationem aperiam pariatur
					possimus tempore atque minus! Debitis sunt fuga, quia facere
					explicabo, laborum error totam dolor quae qui officiis. Inventore
					eligendi illo voluptas non porro ex obcaecati reprehenderit aperiam
					doloremque. Ex in incidunt dolorum eius dignissimos. Quisquam hic
					libero tenetur voluptate sint autem, explicabo recusandae quidem iusto
					aspernatur voluptatem culpa fuga velit eum ipsum, quas quod magnam
					distinctio neque et! Aut corrupti esse odit cum minus.
				</p>
				<div className='card-actions justify-end'>
					<Link href={'/blog/slug=1'}>
						<button className='btn btn-primary'>Read More</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default BlogCard;
