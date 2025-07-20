'use client';
import { useSearchParams } from 'next/navigation';

export default () => {
	const searchParams = useSearchParams();

	const search = searchParams.get('id');
	console.log(search);
	return search;
};
