function vacationBooksList(input) {
    let bookPages = Number(input[0]);
    let pagesReadPerHour = input[1];  
    let days = input[2]; 

    let neededPagesForDay =  bookPages / days;
    let neededHoursForDay = neededPagesForDay / pagesReadPerHour;
    console.log(neededHoursForDay);
}

vacationBooksList(["432",
"15",
"4"])