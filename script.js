let nav = 0
let clicked = null
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []

const calendar = document.getElementById('calendar')
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function load(){
    //date object
    const dt = new Date()

    const day = dt.getDate()
    const month = dt.getMonth() //index value so start from 0 for the months
    const year = dt.getFullYear()

    const firstDayOfMonth = new Date(year, month, 1)
    //get the number of days in a month
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const dateString = firstDayOfMonth.toLocaleDateString('en-FR', {
        weekday: 'long',
        year: 'numeric', 
        month: 'numeric',
        day: 'numeric'
    })

    //Padding days = last's month's days

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0])
    
    for(let i = 1; i <= paddingDays + daysInMonth; i++){
        const daySquare = document.createElement('div')
        daySquare.classList.add('day')

        if(i > paddingDays){
            daySquare.innerText = i - paddingDays

            //there's click events
            //there's click events

            daySquare.addEventListener('click', () => console.log(daySquare.innerHTML))
        } else {
            daySquare.classList.add('padding')
        }

        calendar.appendChild(daySquare)
    }
}

load()