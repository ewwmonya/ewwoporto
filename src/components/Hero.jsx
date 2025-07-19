import Link from 'next/link';

const Hero = () => {
	return (
		<div
			className='hero min-h-[60vh] bg-cover'
			style={{ background: 'url(/office-hero.jpeg)' }}
		>
			<div className='hero-content text-neutral-content text-left'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>Hi, I'm Monya</h1>
					<p className='mb-5'>
						Web Developer specializing in creating responsive and user-friendly
						websites. Passionate about clean code and innovative design.
					</p>
					<div className='flex gap-x-8'>
						<Link href={'/projects'}>
							<button className='transition-all duration-500 btn btn-outline hover:bg-green-900 hover:text-white hover:border-white'>
								View Projects
							</button>
						</Link>
						<button className='transition-all duration-500 btn btn-outline hover:bg-green-900 hover:text-white hover:border-white'>
							Latest Blogs
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
