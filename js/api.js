const API_KEY = "505a3eec3e074cc74ceda32f6b638955";

async function fetchWeather(city, country = "") {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("City not found. Please check spelling and try again.");
	}
	res = await response.json();
	console.log(res);
	return res;
}
async function fetchWeatherWithLocation({ latitude, longitude }) {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("City not found. Please check spelling and try again.");
	}
	res = await response.json();
	console.log(res);
	return res;
}
