//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }

// Variables
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const newRequest = "./src/data.json";
const work = document.querySelector(".work");
const play = document.querySelector(".play");
const study = document.querySelector(".study");
const exercise = document.querySelector(".exercise");
const social = document.querySelector(".social");
const selfcare = document.querySelector(".selfcare");
const time = document.querySelector(".time");

// fetch JSON

async function timeTrack() {
    const request = new Request(newRequest);
    const response = await fetch(request);
    const data = await response.json();

    // event listeners
    daily.addEventListener("click", showDaily);
    weekly.addEventListener("click", showWeekly);
    monthly.addEventListener("click", showMonthly);

    // functions from listeners - active tab + call timeframe data

    function showDaily() {
        daily.classList.add("active");
        weekly.classList.remove("active");
        monthly.classList.remove("active");
        dailyData(); // calls data from below
    }

    function showWeekly() {
        daily.classList.remove("active");
        weekly.classList.add("active");
        monthly.classList.remove("active");
        weeklyData(); // calls data from below
    }

    function showMonthly() {
        daily.classList.remove("active");
        weekly.classList.remove("active");
        monthly.classList.add("active");
        monthlyData(); // calls data from below
    }

    // daily data //

    function dailyData() {
        let workDailyTime = data[0].timeframes.daily.current;
        workTime = work.querySelector(".time");
        workTime.innerText = `${workDailyTime}hrs`;
        let workDailyPrevious = data[0].timeframes.daily.previous;
        workPrevious = work.querySelector(".previous");
        workPrevious.innerText = `Previous - ${workDailyPrevious}hrs`;

        let playDailyTime = data[1].timeframes.daily.current;
        playTime = play.querySelector(".time");
        playTime.innerText = `${playDailyTime}hrs`;
        let playDailyPrevious = data[1].timeframes.daily.previous;
        playPrevious = play.querySelector(".previous");
        playPrevious.innerText = `Previous - ${playDailyPrevious}hrs`;

        let studyDailyTime = data[2].timeframes.daily.current;
        studyTime = study.querySelector(".time");
        studyTime.innerText = `${studyDailyTime}hrs`;
        let studyDailyPrevious = data[2].timeframes.daily.previous;
        studyPrevious = study.querySelector(".previous");
        studyPrevious.innerText = `Previous - ${studyDailyPrevious}hrs`;

        let exerciseDailyTime = data[3].timeframes.daily.current;
        exerciseTime = exercise.querySelector(".time");
        exerciseTime.innerText = `${exerciseDailyTime}hrs`;
        let exerciseDailyPrevious = data[3].timeframes.daily.previous;
        exercisePrevious = exercise.querySelector(".previous");
        exercisePrevious.innerText = `Previous - ${exerciseDailyPrevious}hrs`;

        let socialDailyTime = data[4].timeframes.daily.current;
        socialTime = social.querySelector(".time");
        socialTime.innerText = `${socialDailyTime}hrs`;
        let socialDailyPrevious = data[4].timeframes.daily.previous;
        socialPrevious = social.querySelector(".previous");
        socialPrevious.innerText = `Previous - ${socialDailyPrevious}hrs`;

        let selfcareDailyTime = data[5].timeframes.daily.current;
        selfcareTime = selfcare.querySelector(".time");
        selfcareTime.innerText = `${selfcareDailyTime}hrs`;
        let selfcareDailyPrevious = data[5].timeframes.daily.previous;
        selfcarePrevious = selfcare.querySelector(".previous");
        selfcarePrevious.innerText = `Previous - ${selfcareDailyPrevious}hrs`;
    }

    // weekly data //

    function weeklyData() {
        let workWeeklyTime = data[0].timeframes.weekly.current;
        workTime = work.querySelector(".time");
        workTime.innerText = `${workWeeklyTime}hrs`;
        let workWeeklyPrevious = data[0].timeframes.weekly.previous;
        workPrevious = work.querySelector(".previous");
        workPrevious.innerText = `Last week - ${workWeeklyPrevious}hrs`;

        let playWeeklyTime = data[1].timeframes.weekly.current;
        playTime = play.querySelector(".time");
        playTime.innerText = `${playWeeklyTime}hrs`;
        let playWeeklyPrevious = data[1].timeframes.weekly.previous;
        playPrevious = play.querySelector(".previous");
        playPrevious.innerText = `Last week - ${playWeeklyPrevious}hrs`;

        let studyWeeklyTime = data[2].timeframes.weekly.current;
        playTime = study.querySelector(".time");
        playTime.innerText = `${studyWeeklyTime}hrs`;
        let studyWeeklyPrevious = data[2].timeframes.weekly.previous;
        studyPrevious = study.querySelector(".previous");
        studyPrevious.innerText = `Last week - ${studyWeeklyPrevious}hrs`;

        let exerciseWeeklyTime = data[3].timeframes.weekly.current;
        exerciseTime = exercise.querySelector(".time");
        exerciseTime.innerText = `${exerciseWeeklyTime}hrs`;
        let exerciseWeeklyPrevious = data[3].timeframes.weekly.previous;
        exercisePrevious = exercise.querySelector(".previous");
        exercisePrevious.innerText = `Last week - ${exerciseWeeklyPrevious}hrs`;

        let socialWeeklyTime = data[4].timeframes.weekly.current;
        socialTime = social.querySelector(".time");
        socialTime.innerText = `${socialWeeklyTime}hrs`;
        let socialWeeklyPrevious = data[4].timeframes.weekly.previous;
        socialPrevious = social.querySelector(".previous");
        socialPrevious.innerText = `Last week - ${socialWeeklyPrevious}hrs`;

        let selfcareWeeklyTime = data[5].timeframes.weekly.current;
        selfcareTime = selfcare.querySelector(".time");
        selfcareTime.innerText = `${selfcareWeeklyTime}hrs`;
        let selfcareWeeklyPrevious = data[5].timeframes.weekly.previous;
        selfcarePrevious = selfcare.querySelector(".previous");
        selfcarePrevious.innerText = `Last week - ${selfcareWeeklyPrevious}hrs`;
    }

    // monthly data //

    function monthlyData() {
        let workMonthlyTime = data[0].timeframes.monthly.current;
        workTime = work.querySelector(".time");
        workTime.innerText = `${workMonthlyTime}hrs`;
        let workMonthlyPrevious = data[0].timeframes.monthly.previous;
        workPrevious = work.querySelector(".previous");
        workPrevious.innerText = `Last month - ${workMonthlyPrevious}hrs`;

        let playMonthlyTime = data[1].timeframes.monthly.current;
        playTime = play.querySelector(".time");
        playTime.innerText = `${playMonthlyTime}hrs`;

        let playMonthlyPrevious = data[1].timeframes.monthly.previous;
        playPrevious = play.querySelector(".previous");
        playPrevious.innerText = `Last month - ${playMonthlyPrevious}hrs`;

        let studyMonthlyTime = data[2].timeframes.monthly.current;
        studyTime = study.querySelector(".time");
        studyTime.innerText = `${studyMonthlyTime}hrs`;

        let studyMonthlyPrevious = data[2].timeframes.monthly.previous;
        studyPrevious = study.querySelector(".previous");
        studyPrevious.innerText = `Last month - ${studyMonthlyPrevious}hrs`;

        let exerciseMonthlyTime = data[3].timeframes.monthly.current;
        exerciseTime = exercise.querySelector(".time");
        exerciseTime.innerText = `${exerciseMonthlyTime}hrs`;
        let exerciseMonthlyPrevious = data[3].timeframes.monthly.previous;
        exercisePrevious = exercise.querySelector(".previous");
        exercisePrevious.innerText = `Last month - ${exerciseMonthlyPrevious}hrs`;

        let socialMonthlyTime = data[4].timeframes.monthly.current;
        socialTime = social.querySelector(".time");
        socialTime.innerText = `${socialMonthlyTime}hrs`;
        let socialMonthlyPrevious = data[4].timeframes.monthly.previous;
        socialPrevious = social.querySelector(".previous");
        socialPrevious.innerText = `Last month - ${socialMonthlyPrevious}hrs`;

        let selfcareMonthlyTime = data[5].timeframes.monthly.current;
        selfcareTime = selfcare.querySelector(".time");
        selfcareTime.innerText = `${selfcareMonthlyTime}hrs`;
        let selfcareMonthlyPrevious = data[5].timeframes.monthly.previous;
        selfcarePrevious = selfcare.querySelector(".previous");
        selfcarePrevious.innerText = `Last month - ${selfcareMonthlyPrevious}hrs`;
    }
}

timeTrack();
