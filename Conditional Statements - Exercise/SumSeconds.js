function sumSeconds(input) {
    let firstRacerTime = Number(input[0]);
    let secondRacerTime = Number(input[1]);
    let thirdRacerTime = Number(input[2]);
    let totalTimeInSeconds = firstRacerTime + secondRacerTime + thirdRacerTime;

    let minutes = Math.floor((totalTimeInSeconds / 60));
    let seconds = (totalTimeInSeconds % 60);
    if (seconds >= 10){
      console.log(minutes + ":" + seconds);
    } else {
        console.log(minutes + ":0" + seconds);
    }
}

sumSeconds(["30", "45", 
"44"])
;
