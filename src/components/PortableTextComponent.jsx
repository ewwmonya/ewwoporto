import { PortableText } from '@portabletext/react';

const PortableTextComponent = ({ value }) => {
	return (
		<div>
			<PortableText
				value={value}
				components={{
					block: {
						h1: ({ children }) => (
							<h1 className='text-4xl font-bold mb-4'>{children}</h1>
						),
						h2: ({ children }) => (
							<h2 className='text-3xl font-semibold mb-3'>{children}</h2>
						),
						h3: ({ children }) => (
							<h3 className='text-2xl font-semibold mb-2'>{children}</h3>
						),
						normal: ({ children }) => (
							<p className='text-base mb-4'>{children}</p>
						),
					},
				}}
			/>
		</div>
	);
};
export default PortableTextComponent;
