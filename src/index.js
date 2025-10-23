'use strict'

const cityNameInput = document.getElementById('cityName')
const cityIdInput = document.getElementById('cityId')
const radios = document.getElementsByName('searchType')

const okbtn = document.getElementById('okbtn')
const weatherbtn = document.getElementById('weatherbtn')
const vancelbtn = document.getElementById('cancelbtn')

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