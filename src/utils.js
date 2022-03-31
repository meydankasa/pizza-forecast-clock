export const convertH2M = (timeInHour) => {
    let timeParts = timeInHour.split(":");
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

const fiveTimeInMinutes = convertH2M("17:00");

export const calculateMinuteUntilFive = () => {
    let today = new Date();
    let todayTime = today.getHours() + ":" + today.getMinutes()
    let todayTimeInMinutes = convertH2M(todayTime);
    let minuteUntilFive = fiveTimeInMinutes - todayTimeInMinutes
    if (fiveTimeInMinutes < todayTimeInMinutes) {
        minuteUntilFive = fiveTimeInMinutes - todayTimeInMinutes + 1440;
    }
    return minuteUntilFive;
}

calculateMinuteUntilFive();

export const calcCompletionChances = (data) => {
    debugger
    let numOfBugs = data;
    const minLeft =  calculateMinuteUntilFive();
    const fixRate = 1 / 5;
    let openBugs = 0;
    let chanceOfPizza = 0;

    openBugs = numOfBugs - (fixRate * minLeft);
    const workTimeLeft = openBugs / fixRate;
    if (workTimeLeft > minLeft) {
        chanceOfPizza = 100;
    } else if (numOfBugs > 0) {
        chanceOfPizza = (workTimeLeft / minLeft) * 100
         if (chanceOfPizza < 0 ) {
             chanceOfPizza = chanceOfPizza.toString().split('-').join('');
         }
    }
    return Math.floor(chanceOfPizza ) + '%';
}
