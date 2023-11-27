function WorldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);   
    let distanceInMeters = Number(input[1]);      
    let timeInSecondsForMeter = Number(input[2]); 

    let totalTimeInSeconds = timeInSecondsForMeter * distanceInMeters;
    let additionalLateInSeconds = (Math.floor(distanceInMeters / 15)) * 12.5;

    totalTimeInSeconds += additionalLateInSeconds;

    if (totalTimeInSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTimeInSeconds).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTimeInSeconds - recordInSeconds)} seconds slower.`);
    }
}

WorldSwimmingRecord(["55555.67",
"3017",
"5.03"]);
