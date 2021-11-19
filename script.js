const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();

const nextYear = currentYear + 1;

const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const differenceTime = newYearTime - currentTime;

    const daysInsert = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
    const hoursInsert = Math.floor(differenceTime / 1000 / 60 / 60) % 24;
    const minutesInsert = Math.floor(differenceTime / 1000 / 60) % 60;
    const secondsInsert = Math.floor(differenceTime / 1000) % 60;

    days.innerHTML = daysInsert;
    hours.innerHTML = hoursInsert < 10 ? "0" + hoursInsert : hoursInsert;
    minutes.innerHTML = minutesInsert < 10 ? "0" + minutesInsert : minutesInsert;
    seconds.innerHTML = secondsInsert < 10 ? "0" + secondsInsert : secondsInsert;
}

setInterval(updateCountdown, 1000);

const year = document.querySelector("#year");

year.innerHTML = `${currentYear + 1}`;

