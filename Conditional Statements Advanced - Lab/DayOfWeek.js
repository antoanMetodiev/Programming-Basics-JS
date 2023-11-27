function dayOfWeek(input) {
    let dayOfWeek = Number(input[0]);
    if (dayOfWeek == 1) {
       console.log("Monday");
    } else if (dayOfWeek == 2) {
        console.log("Tuesday");
    } else if (dayOfWeek == 3) {
        console.log("Wednesday");
    } else if (dayOfWeek == 4) {
        console.log("Thursday");
    } else if (dayOfWeek == 5) {
        console.log("Friday");
    } else if (dayOfWeek == 6) {
        console.log("Saturday");
    } else if (dayOfWeek == 7) {
        console.log("Sunday");
    } else {
        console.log("Error");
    }
}

dayOfWeek(["7"]);