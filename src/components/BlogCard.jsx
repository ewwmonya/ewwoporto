import Link from 'next/link';

const BlogCard = ({ post }) => {
	const { title, slug, _id, shortDescription } = post;
	const linkToBlog = `/blog/${_id}?${slug.current}`;
	return (
		<div className='card card-border bg-base-200 rounded-lg'>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{shortDescription}</p>
				<div className='card-actions justify-end'>
					<Link href={linkToBlog}>
						<button className='btn btn-primary'>Read More</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default BlogCard;
