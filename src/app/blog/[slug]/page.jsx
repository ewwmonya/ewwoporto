import FeaturedProjects from '@/components/FeaturedProjects';
import PortableTextComponent from '@/components/PortableTextComponent';
import { client } from '@/sanity/client';
import searchParams from '@/utils/SearchParams';
const linkId = searchParams;
console.log(linkId);
const page = async () => {
	const pathname = usePathname();

	useEffect(() => {
		console.log('Path changed:', pathname);
	}, [pathname]); // runs only when pathname changes

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
			<FeaturedProjects />
		</main>
	);
};
export default page;
