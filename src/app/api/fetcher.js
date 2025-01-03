export const fetcher = async (endpoint, options = {}) => {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API;
	const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

	try {
		const response = await fetch(`${baseUrl}${endpoint}?populate=*`, {
			method: options.method || "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
				...options.headers,
			},
			body: options.body ? JSON.stringify(options.body) : undefined,
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error(`Error in fetcher for endpoint ${endpoint}:`, error);
		throw error;
	}
};
