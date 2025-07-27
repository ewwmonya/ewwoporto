const page = () => {
	return (
		<main className='px-8 lg:px-32 min-h-screen grid place-content-center'>
			<div className='flex flex-col gap-4 items-center lg:max-w-[45vw]'>
				<img
					className='w-48'
					src='/building_blocks.svg'
					alt='Build brick by brick'
				/>
				<h2 className='text-3xl'>About Me</h2>
				<div className=''>
					<p className='text-gray-500 leading-8 '>
						Creative frontend developer blending marketing, design, and
						development to build impactful, revenue-driven campaigns. Daily
						experience with HTML, CSS, JavaScript, React, and Adobe Photoshop to
						design and develop banners, landing pages, and promotional
						campaigns.
					</p>
					<p className='text-gray-500 leading-8 '>
						Skilled in pricing strategy, Client promotion planning, and creating
						cohesive digital experiences that drive conversions. Passionate
						about shipping thoughtful work and continuously improving frontend
						and marketing skills to deliver better results.
					</p>
				</div>
			</div>
			<h3 className='text-2xl text-left mt-12'>
				Self-Education & Developer Training
			</h3>
			<ul className='grid gap-y-4 p-4'>
				<li>
					JavaScript ES6 (January 2024 - January 2025) → React Learning
					immediately
				</li>
				<li>React + Modern Frontend Development (Active → All Projects)</li>
				<li>Vue + Modern Frontend Development (Active → Some Projects)</li>
			</ul>
			<div className='grid grid-cols-4 gap-4'></div>
		</main>
	);
};
export default page;
