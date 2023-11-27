function lunchBreak(input) {
    let nameOfTheSeries = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let breakTime = breakDuration / 8;
    let timeForSpleep = breakDuration / 4;
    breakDuration -= breakTime + timeForSpleep;
    if (breakDuration >= episodeDuration) {
        console.log(`You have enough time to watch ${nameOfTheSeries} and left with ${Math.ceil(breakDuration - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfTheSeries}, you need ${Math.ceil(episodeDuration - breakDuration)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"]);
    