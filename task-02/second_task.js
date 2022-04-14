const sec = 60;
const min = 60;
const hour = 24;

function secondPerDay() {
    const a = (sec * min * hour);
    console.log(a);
}

function secondPerHour() {
    const b = (sec * min);
    console.log(b);
}

secondPerDay();
secondPerHour();