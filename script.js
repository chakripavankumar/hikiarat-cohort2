Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const result = prompt("please enter the X")
if (result >= 10) {
    console.log("the X is greater than  or equal 10");
} else {
    console.log("the X is less than 10");
}

Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const result = prompt("please enter the age of driver")
if (result >= 18) {
    console.log(" he is eligible for driving");
} else {
    console.log(" not eligible for driving");
}

Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("The Achieved grade is A");
    } else if (score >= 80 && score < 90) {
        console.log("The Achieved grade is A+");
    } else {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    }
}

// const scoreInput = prompt("Please enter the score");
// const score = Number(scoreInput);

// if (!isNaN(score)) {
//     const result = assignGrade(score);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

function validateUsername(username) {
    if (username.length < 6) {
        console.log("Username too short");
    } else if (username.length > 15) {
        console.log("Username too long");
    } else {
        console.log("Username accepted");
    }
}

// Example usage:
const userInput = prompt("Enter your username");
validateUsername(userInput);

