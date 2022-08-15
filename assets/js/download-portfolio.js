function downloadPortfolio(type) {
	if (type === "English") umami.trackEvent('Portfolio Download', { type: "English" }, '/portfolio', '963c80f6-c70d-4d10-8f99-6dde4010f4f9');
	if (type === "Danish") umami.trackEvent('Portfolio Download', { type: "Danish" }, '/portfolio', '963c80f6-c70d-4d10-8f99-6dde4010f4f9');
}