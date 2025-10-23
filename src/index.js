'use strict'

const cityNameInput = document.getElementById('cityName')
const cityIdInput = document.getElementById('cityId')
const radios = document.getElementsByName('searchType')

const okbtn = document.getElementById('okbtn')
const weatherbtn = document.getElementById('weatherbtn')
const cancelbtn = document.getElementById('cancelbtn')

const temperature = document.getElementById('temperature')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')

const api = '8df86b370cc7920a7229450f28f03a5d'

radios.forEach(radio => {
	radio.addEventListener('change', () => {
		if (radio.value === 'name') {
			cityNameInput.disabled = false
			cityIdInput.disabled = true
			cityIdInput.value = ''
		} else if (radio.value === 'id') {
			cityNameInput.disabled = true
			cityIdInput.disabled = false
			cityNameInput.value = ''
		}
	})
})

okbtn.addEventListener('click', () => {
	if (!cityNameInput.disabled && cityNameInput.value.trim()) {
		console.log(`Selected city: ${cityNameInput.value}`);
	} else if (!cityIdInput.disabled && cityIdInput.value.trim()) {
		console.log(`Selected city: ${cityIdInput.value}`);
	} else {
		console.log('Enter a city name or id please.');
	}
})

weatherbtn.addEventListener('click', async () => {
	let url = ''

	if (!cityNameInput.disabled && cityNameInput.value.trim()) {
		const city = cityNameInput.value.trim()
		url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
	} else if (!cityIdInput.disabled && cityIdInput.value.trim()) {
		const id = cityIdInput.value.trim()
		url = `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}&units=metric`
	} else {
		console.log('Select a search method and enter data please.');
		return
	}

	try {
		const response = await fetch(url)
		if (!response.ok) throw new Error('City is not found or invalid ID')
			const data = await response.json()

		temperature.textContent = `${data.main.temp} *C`
		wind.textContent = `${data.wind.speed} m/s`
		humidity.textContent = `${data.main.humidity} %`
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
})

cancelbtn.addEventListener('click', () => {
	cityNameInput.value = ''
	cityIdInput.value = ''
	cityNameInput.disabled = true
	cityIdInput.disabled = true
	radios.forEach(r => (r.checked = false))

	temperature.textContent = '-'
	wind.textContent = '-'
	humidity.textContent = '-'
})