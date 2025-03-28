// storage.js
function getLastSearch() {
	const search = localStorage.getItem("lastSearch");
	return search ? JSON.parse(search) : null;
}

function saveLastSearch(city, country) {
	localStorage.setItem("lastSearch", JSON.stringify({ city, country }));
}

function getTheme() {
	return localStorage.getItem("theme") || "light";
}

function saveTheme(theme) {
	localStorage.setItem("theme", theme);
}
function saveUserLocation() {
	navigator.geolocation.getCurrentPosition((position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
		localStorage.setItem(
			"userLocation",
			JSON.stringify({ latitude, longitude })
		);
	});
}
function getUserLocation() {
	return localStorage.getItem("userLocation")
		? JSON.parse(localStorage.getItem("userLocation"))
		: null;
}
