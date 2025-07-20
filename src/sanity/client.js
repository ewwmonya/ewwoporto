import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'v8d7sfn1',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false,
});
