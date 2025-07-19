const page = ({ params }) => {
	const { slug } = params;

	return (
		<div>
			<h1>page</h1>
			<p>title: {slug}</p>
		</div>
	);
};
export default page;
