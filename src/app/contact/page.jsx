import Link from 'next/link';

const page = () => {
	return (
		<main className='min-h-screen grid place-content-center '>
			<div class='p-4 w-[85vw] lg:w-[40vw] my-20 mx-auto max-w-xl  rounded-2xl '>
				<img src='/freelancer_vibs.svg' alt='' />
				<h2 className='text-3xl text-green-900 font-bold capitalize'>
					Im Currently Working On this page....
				</h2>
				{/* <h2 class='text-3xl text-gray-900 font-bold'>Contact Me</h2>
				<form class='mt-8 space-y-5'>
					<div>
						<label class='text-sm text-gray-900 font-medium mb-2 block'>
							Name
						</label>
						<input
							type='text'
							placeholder='Enter Name'
							class='w-full py-2.5 px-4 text-gray-800 bg-gray-100 border border-gray-200 focus:border-gray-900 focus:bg-transparent text-sm outline-0 transition-all'
						/>
					</div>
					<div>
						<label class='text-sm text-gray-900 font-medium mb-2 block'>
							Email
						</label>
						<input
							type='email'
							placeholder='Enter Email'
							class='w-full py-2.5 px-4 text-gray-800 bg-gray-100 border border-gray-200 focus:border-gray-900 focus:bg-transparent text-sm outline-0 transition-all'
						/>
					</div>
					<div>
						<label class='text-sm text-gray-900 font-medium mb-2 block'>
							Subject
						</label>
						<input
							type='text'
							placeholder='Enter Subject'
							class='w-full py-2.5 px-4 text-gray-800 bg-gray-100 border border-gray-200 focus:border-gray-900 focus:bg-transparent text-sm outline-0 transition-all'
						/>
					</div>
					<div>
						<label class='text-sm text-gray-900 font-medium mb-2 block'>
							Message
						</label>
						<textarea
							placeholder='Enter Message'
							rows='6'
							class='w-full px-4 text-gray-800 bg-gray-100 border border-gray-200 focus:border-gray-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all'
						></textarea>
					</div>
					<button
						type='button'
						class='text-white bg-green-900 font-medium hover:bg-gray-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer'
					>
						Send message
					</button>
				</form> */}
			</div>
		</main>
	);
};
export default page;
