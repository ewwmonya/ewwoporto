const GridCardItem = () => {
	return (
		<div className='card-md bg-base-100 rounded-xl'>
			<figure>
				<img
					className='rounded-t-xl'
					src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<p className='card-title text-lg'>Burges Landing Page</p>
				<p className='text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					cupiditate esse similique!
				</p>
				<div className='card-actions justify-end'>
					<button className='w-36 transition-all duration-500 btn btn-outline hover:bg-emerald-700 hover:text-white hover:border-white'>
						View "Name"
					</button>
				</div>
			</div>
		</div>
	);
};
export default GridCardItem;
