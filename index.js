/* 

    // IF-ELSE STATEMENTS

    // 0 - infant
    // 1 - 4 toddler
    // 5 - 12 child
    // 13 - 19 teenager
    // 20 - 29 young adult
    // 30 - 59 adult
    // > 60 senior

    function ageCategory(age) {
        if (age < 5 && age > 0) {
            console.log('toddler');

        } else if (age > 4 && age < 13) {
            console.log('child');

        } else if (age > 12 && age < 20) {
            console.log('teenager');

        } else if (age > 19 && age < 30) {
            console.log('young adult');

        } else if (age > 29 && age < 60) {
            console.log('adult');
            
        } else if (age > 59) {
            console.log('senior')

        } else {
            console.log('Invalid age')
        }
    }

    ageCategory(500);


    let weather = ['Sunny', 'Rainy'];

    if (weather == 'Sunny') {
        console.log('I will wash my clothes');

    } else {
        console.log('I will sleep');
    }

    let age = 9;

    if (age < 15) {
        console.log('teenager');
        
    } else if (age < 10) { 
        console.log('child');

    } else if (age < 28) {
        console.log('young adult');

    } else {
        console.log('senior');
    }

*/


/*

    // SWITCH CASE


    function dayTeller(day) {

        switch (day) {
            case 'Monday':
                console.log('It\'s Monday!');
                break;
                
            case 'Tuesday':
                console.log('It\'s Tuesday!');
                break;

            case 'Wednesday':
                console.log('It\'s Wednesday!');
                break;

            case 'Thursday':
                console.log('It\'s Thursday!');
                break;

            case 'Friday':
                console.log('It\'s Friday!');
                break;

            case 'Saturday':
                console.log('It\'s Saturday!');
                break;

            case 'Sunday':
                console.log('It\'s Sunday!');
                break;
        }
    }

    function toTitleCase(word) {
    let firstLetter = word[0];
    let slicedWord = word.slice(1);
    let transformedWord = firstLetter.toUpperCase() + slicedWord.toLowerCase();
    return transformedWord;
    }

    function choreTeller(day) {

        let modWord = toTitleCase(day);

        switch (modWord) {
            case 'Monday':   
            case 'Tuesday':
                console.log('I will clean the house');
                break;

            case 'Wednesday':
            case 'Thursday':
                console.log('I will fix the car');
                break;

            case 'Friday':
            case 'Saturday':
                console.log('I will gala');
                break;

            case 'Sunday':
                console.log('I will go to church');
                break;

            default:
                console.log('I don\'t know that day');
        }
    }

    // 'SUNDAY' != 'Sunday'
    choreTeller('mOndaY');

    switch (NaN == false) {
        case true:
            console.log(typeof 'String');
            break;
            
        case false:
            console.log(false);
            break;
        
        default:
            console.log('Waley');
    }

*/

/*

    // CONDITIONAL STATEMENTS USING LOGICAL OPERATORS

    // AND (&&) - value will be true if both conditions are true else false
    // OR (||) - value will be true if one of the conditions is true else false

    dayTeller('Monday');

    let isRunning = true;
    let isInDiet = true;
    let isSleepingEarly = false;
    let isHealthy;

    if (isRunning == true && isInDiet == true && isSleepingEarly) {
        isHealthy = true;
        
    } else {
        isHealthy = false;
    }

*/

/* 

    // Ternary Operator
    // Syntax: condition ? expression_1 : expression_2
    console.log(isHealthy ? 'Healthy' : 'Not Healthy');

    function firstRandomCharGenerator() {
        const charSet = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5];

        let randomNum = Math.floor(Math.random() * 10);

        return charSet[randomNum];
    }

    function secondRandomCharGenerator() {
        const charSet = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5];

        let randomNum = Math.floor(Math.random() * 10);

        return charSet[randomNum];
    }

    let char1 = firstRandomCharGenerator();
    let char2 = secondRandomCharGenerator();

    console.log(char1 == char2 ? true : false);

*/

// 

/*

    LOOPS

    * NOT PRACTICAL

    let arr1 = ['A', 'B', 'C', 'D', 'E'];

    console.log(arr1[0]);
    console.log(arr1[1]);
    console.log(arr1[2]);
    console.log(arr1[3]);
    console.log(arr1[4]);

    * SYNTAX

    for (expression1; expression2; expression3) {
        // code to execute
    }

    expression1 - index where the iteration will start
    expression2 - tells when the iteration will stop
    expression3 - controls the iteration

    continue - skip the current iteration

    let arr1 = ['A', 'B', 'C', 'D', 'E'];


    for (let i = 0; i <= 4; i++) {
        console.log(arr1[i]);
    }


    // NORMAL ITERATION

    let fname = 'Anselle Kristine Calaluan';

    for (let i = 0; i < fname.length; i++) {
        console.log(fname[i]);
    }


    // REVERSE ITERATION

    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = numArr.length - 1; i >= 0; i--) {
        console.log(numArr[i]);
    }

    let colorArray = ['blue', 'red', 'green', 'yellow', 'black'];

    for (let i = 0; i <= colorArray.length - 1; i++) {
        console.log(colorArray[i]);
    }

    for (let i = colorArray.length - 1; i >= 0; i--) {
        console.log(colorArray[i]);
    }
        
    let arr2 = [1, 2, 3];

    for (let i = 0; i <= arr2.length - 1; i++) {
        if (arr2[i] == 2) {
            continue;
        } else {
            console.log(arr2[i]);
        }
    }

*/

/*

    // BUBBLE SORT - a sorting algortihm

    const numArr = [4, 2, 5, 3, 1]; // [2, 4, 5, 3, 1]

    for (let i = 0; i <= numArr.length - 1; i++) {
        
        for (let j = 0; j < numArr.length - 1; j++) {

            if (numArr[j] > numArr[j + 1]) {

                let temp = numArr[j];
                numArr[j] = numArr[j + 1];
                numArr[j + 1] = temp;
            } 
        }
    }

    console.log(numArr);

*/

/*
1. Write a program that checks if a number is even or odd using if-else. Return 'Odd' if the number is odd and 'Even' otherwise.
*/

/*
2. Write a program that checks if a number is positive, negative, or zero using if-else. Return 'Positive' for a positive number, 'Negative' for a negative number, and 'Zero' for zero.
Clue: Look up the Math function that returns the sign of a number
*/

/*
3. Create a program that categorizes an age input. Using a ternary operator, return 'Adult' for ages 18+ or 'Minor' otherwise.
*/

/*
4. Use a for loop to print all the numbers from 1 to 50.
*/

/*
5. Use a for loop to print all the numbers between 1 and 50 that are multiples of 3.
*/

/*
6. Use a for loop that finds the sum of all even numbers between 1 and 100.
*/

/*
7. Use a for loop from 1 - 50;
    - Print "Fizz" if divisible by 3
    - Print "Buzz" if divisible by 5
    - Print "FizzBuzz" if divisible by both
    - Otherwise, print the number
*/

/*
8. Create a program that validates a year if it's a leap year or not.
*/

/*
9. Using a switch-case statement, write a program that takes a score (0 - 100) and prints:
    - "A" if score is >= 90
    - "B" if score is 80 - 89
    - "C" if score is 70 - 79
    - "D" if score is 60 - 69
    - "F" if below 60
*/

/*
10. Write a program using a for loop that counts how many vowels are in a given string.
*/

/*
11. Palindrome Checker - A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

Write a program that checks if a word is a palindrome.

Some palindrome words: 
    - "madam"
    - "racecar"
    - "A man, a plan, a canal, Panama"
    - "Never odd or even"
    - 121
    - 1331
    - 12321
*/

/*
12. Print a reverse countdown from 10 to 1.
*/

/*
13. Write a program that finds the factorial of a number using a for loop.
*/

/*
14. Fibonacci Sequence - is a series of numbers where each number is the sum of the two numbers before it. It usually starts with 0 and 1.

Write a program that prints the Fibonacci sequence up to 10 terms.
Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

Clue:
    - Use a for loop
    - Declare an array with initial elements 0 and 1
    - The corresponding values are always the SUM OF TWO NUMBERS BEFORE IT
*/

/*
15. Using a for loop get the sum of the first 10 terms of the Fibonacci Sequence.
*/