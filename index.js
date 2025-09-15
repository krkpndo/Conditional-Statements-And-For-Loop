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

    // function numIdentify(num1) {
    //     if (num1 % 2 == 0) {
    //         console.log(`${num1} is an Even Number`);
        
    //     } else {
    //         console.log(`${num1} is an Odd Number`);
    //     }
    // }

    // numIdentify(20);

/*
2. Write a program that checks if a number is positive, negative, or zero using if-else. Return 'Positive' for a positive number, 'Negative' for a negative number, and 'Zero' for zero.
Clue: Look up the Math function that returns the sign of a number
*/

    // function checkNumber(num2) {
    //     let sign = Math.sign(num2);

    //     if (sign == 1) {
    //         return `${num2} is a Positive Number`;

    //     } else if (sign == -1) {
    //         return `${num2} is a Negative Number`;

    //     } else {
    //         return `${num2} is Zero`;
    //     }
    // }

    // console.log(checkNumber(-100));

/*
3. Create a program that categorizes an age input. Using a ternary operator, return 'Adult' for ages 18+ or 'Minor' otherwise.
*/

    // function categorizeAge(age) {
    //     return age >= 18 ? 'Adult' : 'Minor';
    // }

    // console.log(categorizeAge(20));

/*
4. Use a for loop to print all the numbers from 1 to 50.
*/

    // for (let i = 1; i <= 50; i++) {
    // console.log(i);
    // }

/*
5. Use a for loop to print all the numbers between 1 and 50 that are multiples of 3.
*/

    // for (let i = 1; i <= 50; i++) {
    //     if (i % 3 == 0) {
    //     console.log(i);
    //     }
    // }

/*
6. Use a for loop that finds the sum of all even numbers between 1 and 100.
*/

    // let sum = 0;

    // for (let i = 1; i <= 100; i++) {
    //     if (i % 2 == 0) {
    //         sum += i;
    //     }
    // }

    // console.log(sum);

/*
7. Use a for loop from 1 - 50;
    - Print "Fizz" if divisible by 3
    - Print "Buzz" if divisible by 5
    - Print "FizzBuzz" if divisible by both
    - Otherwise, print the number
*/

    // for (let i = 1; i <= 50; i++) {
    //     if (i % 3 == 0 && i % 5 == 0)
    //         console.log("FizzBuzz");
    //     else if (i % 3 == 0) {
    //     console.log("Fizz");
    //     }
    //     else if (i % 5 == 0) {
    //     console.log("Buzz");
    //     } else {
    //     console.log(i)
    //     }
    // }

/*
8. Create a program that validates a year if it's a leap year or not.
*/

    // function isLeapYear(year) {
    //     if (year % 400 == 0) {
    //         return `${year} is a Leap Year`;
    //     } else if (year % 100 == 0) {
    //         return `${year} is NOT a Leap Year`;
    //     } else if (year % 4 == 0) {
    //         return `${year} is a Leap Year`;
    //     } else {
    //         return `${year} is NOT a Leap Year`;
    //     }
    // }

    // console.log(isLeapYear(2019));

/*
9. Using a switch-case statement, write a program that takes a score (0 - 100) and prints:
    - "A" if score is >= 90
    - "B" if score is 80 - 89
    - "C" if score is 70 - 79
    - "D" if score is 60 - 69
    - "F" if below 60
*/

    // function getGrade(score) {
    //     let grade;

    //     switch (true) {
    //         case (score >= 90 && score <= 100):
    //             grade = "A";
    //             break;
    //         case (score >= 80 && score <= 89):
    //             grade = "B";
    //             break;
    //         case (score >= 70 && score <= 79):
    //             grade = "C";
    //             break;
    //         case (score >= 60 && score <= 69):
    //             grade = "D";
    //             break;
    //         case (score >= 0 && score < 60):
    //             grade = "F";
    //             break;
    //         default:
    //             grade = "Invalid";
    //     }

    //     console.log(`Your score is ${score}. Your Grade is ${grade}.`);
    // }

    // getGrade(60);

/*
10. Write a program using a for loop that counts how many vowels are in a given string.
*/

    // function countVowels(str) {
    //     str = str.toLowerCase();

    //     const vowels = ['a', 'e', 'i', 'o', 'u'];

    //     let counter = 0;
        
    //     for (let i = 0; i <= str.length - 1; i++) {
            
    //         for (let j = 0; j <= vowels.length - 1; j++) {
    //             if (str[i] == vowels[j]) {
    //                 counter++;  
    //             }
    //         }
            
    //     }
    //     return counter;
    // }
    
    // console.log(countVowels("ANSELLE KRISTINE CALALUAN")); 

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

    // function isPalindrome(input){

    //     // Modifying input

    //     let finalInput = '';
    //     let reversedWord = '';

    //     const cleanInput = input.split(' ');

    //     for (let i = 0; i < cleanInput.length; i++) {
    //         finalInput += cleanInput[i];
    //     }

    //     // Where reversing happens
    //     for (let i = finalInput.length - 1; i >= 0; i--) {
    //         reversedWord += finalInput[i];
    //     }

    //     return finalInput.toLowerCase() == reversedWord.toLowerCase() ? `${input} is a PALINDROME` : `${input} is NOT A PALINDROME`

    // }

    // console.log(isPalindrome("Never odd or even"));

/*
12. Print a reverse countdown from 10 to 1.
*/

    // for (let i = 10; i >= 1; i--) {
    //     console.log(i);
    // }

/*
13. Write a program that finds the factorial of a number using a for loop.
*/

    // function factorial(num) {
    //     let result = 1;

    //     for (let i = 1; i <= num; i++) {
    //         result *= i;
    //     }

    //     console.log(`Factorial of ${num} is:  ${result}`);

    // }

    // factorial(5);


/*
14. Fibonacci Sequence - is a series of numbers where each number is the sum of the two numbers before it. It usually starts with 0 and 1.

Write a program that prints the Fibonacci sequence up to 10 terms.
Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

Clue:
    - Use a for loop
    - Declare an array with initial elements 0 and 1
    - The corresponding values are always the SUM OF TWO NUMBERS BEFORE IT
*/

    // function fibonacciSequence(n) {
    //     let fib = [];
    //     let term;

    //     for (let i = 0; i < n; i++) {

    //         if (i == 0 || i == 1) {
    //             fib.push(i);

    //         } else {
    //             term = fib[i - 2] + fib[i - 1];
    //             fib.push(term);

    //         } 
    //     }
    //     console.log(fib);
    // }

    // fibonacciSequence(10);

/*
15. Using a for loop get the sum of the first 10 terms of the Fibonacci Sequence.
*/

    // function fibonacciSequence(n) {
    //     let fib = [];
    //     let term;
    //     let sum = 0;

    //     for (let i = 0; i < n; i++) {

    //         if (i == 0 || i == 1) {
    //             fib.push(i);

    //         } else {
    //             term = fib[i - 2] + fib[i - 1];
    //             fib.push(term);

    //         } 
    //     }

    //     for (let i = 0; i < fib.length; i++) {
            
    //         sum += fib[i];
    //     }

    //     console.log(sum);
    // }

    // fibonacciSequence(4);

/*
16. Using for loop, between the numbers 1 and 50, print the numbers 11, 32, 17, 25, 46, 50.
*/


    // for (let i = 1; i <= 50; i++) {
    //     if (i == 11) {
    //         console.log(i);
    //     } 
    //     else if (i == 32) {
    //         console.log(i);
    //     }
    //     else if (i == 17) {
    //         console.log(i);
    //     }
    //     else if (i == 25) {
    //         console.log(i);
    //     }
    //     else if (i == 46) {
    //         console.log(i);
    //     }
    //     else if (i == 50) {
    //         console.log(i);
    //     } else {
    //         continue;
    //     }
    //     console.log(i);
    // }

/*
17. Print the multiplication table of 7.
*/

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i * 7);
    // }

/*
18. Print the squares of numbers from 1 to 15.
*/

    // for (let i = 1; i <= 15; i++) {
    //     console.log(Math.pow(i,2))
    // }

/*
19. Print numbers in reverse order (from 20 down to 1).
*/

    // for (let i = 20; i >= 1; i--) {
    //     console.log(i)
    // }

/*
20. Find the sum of all odd numbers between 1 and 50.
*/

    // let sum = 0;

    // for (let i = 0; i <= 5; i++) {

    //     if (i % 2 == 0) {
    //         continue;
    //     } else {
    //         sum += i;
    //     }
    // }
    // console.log(sum);

/*
    20. Count how many numbers between 1 and 100 are divisible by 3 and 5.
*/

    // let countNum = 0;

    // for (let i = 2; i < 100; i++) {
    //     if (i % 3 == 0 && i % 5 ==0 ){
    //         countNum++;
    //     }
    // }
    // console.log(countNum);


/*
21. Check if a given number is prime using a for loop.
*/

    // function checkPrime (num) {

    //     if (num == 1){
    //         return `${num} is not a Prime Number`;

    //     } else if (num == 2){
    //         return `${num} is a Prime Number`;

    //     } else {
    //         for (let i = 2; i < num; i++) {

    //             if (num % i == 0) {
    //                 return `${num} is not a Prime Number`;

    //             } else {
    //                 continue;
    //             }
    //         }
    //         return `${num} is a Prime Number`; 
    //     }
    // }
    // console.log(checkPrime(11));


/*
22. Print all the divisors of a given number
*/

    // function divOfNum (num) {

    //     const divisors = [];

    //     for (let i = 1; i <= num; i++) {
    //         if (num % i == 0){
    //             divisors.push(i);

    //         } else {
    //             continue;
    //         }
    //     }
    //     return divisors;
    // }
    // console.log(divOfNum(1000));

/*
23. Get the first 20 multiples of 3 and store them in an array. 
*/

/*
24. Make a program that prints all the characters of a string.
*/

/*
25. Make a program that prints all the characters of a string in reverse.
*/

/*
26. Find the largest digit in a number.
Sample Input: 93794
Output: 9
Clue:
    - Gawin munang string yung input para di magka-TypeError
    - Need mo ng variable para maghold nung value ng largest number
    - Then gamit ka ng string method para mapaghiwa-hiwalay yung mga digits
    - For loop ka na, compare mo si current digit [i] dun sa nasa unahan niya [i + 1] :)
*/

/*
27. Print numbers from 5 to 50, increasing by 5 each time.
*/

/*
28. Print the squares of numbers from 6 to 10.
*/

/*
29. Print this pattern of stars using for loop:

*
**
***
****
*****

*/

/*
30. Given a list of numbers [5, -2, 8, -1, 3, -7, 12], print only the positive numbers.
*/

/*
31. Count how many grades in the list [85, 92, 78, 96, 88, 73, 89] are above 80.
*/

/*
32. Create a simple password strength checker that counts how many of these criteria a password meets:
    - At least 8 characters long
    - Contains at least one uppercase letter
    - Contains at least one lowercase letter
    - Contains at least one digit
    Note: Gagamit ata dito ng 'typeof'
    Clue: Gawa ka ng three variables with boolean values if satisfied lahat ng conditions, print mo lang 'Strong password' if di naman, print mo lang yung criteria na di na-meet :)
*/

/*
33. Convert a list of temperatures from Celsius to Fahrenheit: [0, 10, 20, 30, 40]. Add a condition to mark temperatures above 32°F as "Hot", below 0°F as "Freezing", and others as "Moderate".
*/

/*
34. Count how many consonants are in the string "Hello World Programming".
*/

/*
35. Given a list of ages [12, 25, 17, 45, 8, 33, 16], categorize and count them:

    Children: under 13
    Teens: 13-17
    Adults: 18+
*/

/*
36. From the list ["cat", "elephant", "dog", "butterfly", "ant"], print only words longer than 4 characters.
*/

/*
37. Generate the first 15 Fibonacci numbers, but only print the even ones.
*/