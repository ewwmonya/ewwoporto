import { createClient } from 'next-sanity';

export const client = createClient({
	projectId: 'v8d7sfn1',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false,
});
