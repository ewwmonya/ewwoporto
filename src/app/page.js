import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';

const page = () => {
	return (
		<main>
			<section>
				<Hero />
			</section>
			<FeaturedProjects />
			<section className=' p-8 flex flex-col gap-y-4'>
				<p className='text-2xl font-thin font-mono tracking-wider'>About</p>
				<p className='my-4 pr-4 max-w-2/3 leading-6 text-gray-700'>
					I&apos;m a web developer with a passion for creating beautiful and
					functional websites. I specialize in front-end development using
					React, but I&apos;m also comfortable working with back-end
					technologies like Node.js. I&apos;m always learning and exploring new
					technologies to improve my skills and deliver the best possible
					results for my clients.
				</p>
				<button className='w-36 transition-all duration-500 btn btn-outline hover:bg-emerald-700 hover:text-white hover:border-white'>
					Learn More!
				</button>
			</section>
			<section className=' p-8 flex flex-col gap-y-4'>
				<p className='text-2xl font-thin font-mono tracking-wider'>
					Let's Connect
				</p>
				<p className='my-4 pr-4 max-w-2/3 leading-6 text-gray-700'>
					I&apos;m always open to new opportunities and collaborations. Feel
					free to reach out if you have a project in mind or just want to chat
					about web development.
				</p>
				<button className='w-36 transition-all duration-500 btn btn-outline bg-emerald-700 text-base-100 hover:bg-white hover:text-green-900 hover:border-green-900'>
					Contact Me
				</button>
			</section>
		</main>
	);
};
export default page;
