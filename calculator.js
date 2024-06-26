

function OnCalculateButtonClick() {
    const inputStartTime = document.getElementById("InputStartTime");
    const inputEndTime = document.getElementById("InputEndTime");

    console.log(inputStartTime.value);
    const startTime = moment(inputStartTime.value, "HHmm YYYY-MM-DD");
    console.log(startTime);

    console.log(inputEndTime.value);
    const endTime = moment(inputEndTime.value, "HHmm YYYY-MM-DD");
    console.log(endTime);

    const duration = moment.duration(endTime.diff(startTime));
    console.log(Math.floor(duration.asHours())+ "h" + duration.minutes() + "m");
}

function OnLoad() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", OnCalculateButtonClick);
}


document.addEventListener("DOMContentLoaded", OnLoad)