const date = {
    day: new Date().getDay(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
}

const day = ['Mo','Tu','We','Th','Fr','Sa','Su']

const clockHTML = document.querySelector('[data="clock"]')
const clockItems = clockHTML.querySelectorAll('[data-time]')
renderDateTime(clockItems, parseDay(date, day), date.hours, date.minutes, date.seconds)

clocks()

function clocks() {
    setInterval(() => {
        const newDate = {
            day: new Date().getDay(),
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        }

        renderDateTime(clockItems, parseDay(newDate, day), newDate.hours, newDate.minutes, newDate.seconds)
    }, 1000)
}

function renderDateTime(clockItems, day, hours, minutes, seconds) {
    clockItems.forEach(item => {
        if (item.dataset.time === 'day') {
            item.textContent = day
        }
        if (item.dataset.time === 'hours') {
            item.textContent = hours
        }
        if (item.dataset.time === 'minutes') {
            item.textContent = parseMinutes(minutes)
        }
        if (item.dataset.time === 'seconds') {
            item.textContent = parseSeconds(seconds)
        }
    })
}

function parseMinutes(minutes) {
    let parseMinutes = `${minutes}`
    if (minutes <= 9) {
        parseMinutes = `0${minutes}`
    }
    return parseMinutes
}

function parseSeconds(seconds) {
    let parseSeconds = `${seconds}`
    if (seconds <= 9) {
        parseSeconds = `0${seconds}`
    }
    return parseSeconds
}

function parseDay(date, day) {
    const dayNow = date.day
    const parseDay = day.find((day, i) => i + 1 === dayNow ? day : false)
    return parseDay
}