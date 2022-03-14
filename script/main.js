import * as CALENDAR from './calendar.js'

let formSelect = document.querySelector('.form')
formSelect.style.display = 'none'

let closeForm = document.querySelector('.close-form')
let selectDate = document.querySelector('.days')
let formDate = 

selectDate.addEventListener('click', () => {
    formSelect.style.display = 'block' 
})
closeForm.addEventListener('click', () => {
	formSelect.style.display = 'none'
})