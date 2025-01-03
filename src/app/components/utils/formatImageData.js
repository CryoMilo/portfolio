const formatImageUrl = (url) => {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "";
	return `${baseUrl}${url}`;
};

export const formatImageData = (images) => {
	return images.map((image) => ({
		...image,
		url: formatImageUrl(image.url),
		formats: Object.fromEntries(
			Object.entries(image.formats).map(([key, format]) => [
				key,
				{ ...format, url: formatImageUrl(format.url) },
			])
		),
	}));
};
