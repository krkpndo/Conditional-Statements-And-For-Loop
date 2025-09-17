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

        // let multiplesOf3 = [];

        // for (let i = 1; i <= 20; i++) {
        //     multiplesOf3.push(i * 3);
        // }

        // console.log(multiplesOf3);


/*
24. Make a program that prints all the characters of a string.
*/

        // let myString = "Hello World";

        // for (let i = 0; i < myString.length; i++) {
        //     console.log(myString[i]);
        // }


/*
25. Make a program that prints all the characters of a string in reverse.
*/

        // let myString2 = "Hello World";

        // for (let i = myString2.length - 1; i >= 0; i--) {
        //     console.log(myString2[i]);
        // }


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

    // function largestNum (num) {
    //     let numString = num.toString();
    //     let separateNum = numString.split('');
    //     let largeNum;

    //     for (let i = 0; i < separateNum.length; i++) {
    //         if (separateNum[i] > separateNum[i+1]) {
    //             largeNum = separateNum[i];
    //         }
 
    //     }
    //     return largeNum;
    // }

    
    // console.log(largestNum(83762));


/*
27. Print numbers from 5 to 50, increasing by 5 each time.
*/

        // let multiplesOf5 = [];

        // for (let i = 5; i <= 50; i+=5) {
        //     multiplesOf5.push(i);
        // }

        // console.log(multiplesOf5);


/*
28. Print the squares of numbers from 6 to 10.
*/

        // for (let i = 6; i <= 10; i++) {
        //     console.log(Math.pow(i,2))
        // }

/*
29. Print this pattern of stars using for loop:

*
**
***
****
*****

*/

    // for (let i = 1; i < 6; i++) {
    //     let char = '*';
    //     console.log(char.repeat(i));
    // }


/*
30. Given a list of numbers [5, -2, 8, -1, 3, -7, 12], print only the positive numbers.
*/

    // let numbers = [5, -2, 8, -1, 3, -7, 12];

    // for (let i = 0; i < 7; i++) {
    //     if (numbers[i] > 0) {
    //         console.log(numbers[i]);
    //     }
    // }

    // for (let i = 0; i < numbers.length - 1; i++) {
    //     if (Math.sign(numbers[i]) == 1) {
    //         console.log(numbers[i]);
    //     }
    // }


// 31. Count how many grades in the list are above 80.

    // let grades = [85, 92, 78, 96, 88, 73, 89];
    // let count = 0;

    // for (let i = 0; i < grades.length; i++) {
    //     if (grades[i] > 80) {
    //         count++;
    //     }
    // }

    // console.log(count);

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

        function passwordChecker(password) {
        let isEnough = password.length >= 8;
        let withUppercase = /[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]/.test(password);
        let withLowercase = /[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]/.test(password);
        let withNumber = /[0,1,2,3,4,5,6,7,8,9]/.test(password);

            if (isEnough && withUppercase && withLowercase && withNumber) {
                console.log("Strong password!");
            } else {
                console.log("Weak password. Here's what's missing:");

                if (isEnough) {
                    console.log("- Password should be at least 8 characters long");
                }
                if (withUppercase) {
                    console.log("- Password should have at least one uppercase letter");
                }
                if (withLowercase) {
                    console.log("- Password should have at least one lowercase letter");
                }
                if (withNumber) {
                    console.log("- Password should have at least one number");
                }
            }
    }

    passwordChecker("Anselle12");

*/


/*

    // Shortcut Method
    
        function passwordChecker(password) {

        let hasUpperCase = /[A-Z]/.test(password);
        let hasLowerCase = /[a-z]/.test(password);
        let hasDigits = /[0-9]/.test(password);

        let isStrongPassword = hasUpperCase && hasLowerCase && hasDigits;
        let feedback = 'Weak Password: ';

        if (isStrongPassword && password.length >= 8) {
            return 'Strong Password';
        } else  {
            if (password.length < 8) {
                feedback += 'Password too short. '
            } 

            if (!hasUpperCase) {
                feedback += 'No uppercase letter. ';
            }

            if (!hasLowerCase) {
                feedback += 'No lowercase letter. ';
            }

            if (!hasDigits) {
                feedback += 'No digits';
            }

            return feedback;
        }

    }
    console.log(passwordChecker("Kirk"));


*/


/*
33. Convert a list of temperatures from Celsius to Fahrenheit: [0, 10, 20, 30, 40]. Add a condition to mark temperatures above 32°F as "Hot", below 0°F as "Freezing", and others as "Moderate".
*/

    // const list = [0, 10, 20, 30, 40];
    // const newList = [];

    // function celsiusToF(celsiusList) {
    //     for (let i = 0; i < celsiusList.length; i++) {
    //         let celsius = celsiusList[i];
    //         let fahrenheit = (celsius * 9/5) + 32;
    //         let stat;

    //         if (fahrenheit > 32) {
    //             stat = "Hot";
    //         } else if (fahrenheit < 0) {
    //             stat = "Freezing";
    //         } else {
    //             stat = "Moderate";
    //         }

    //         newList.push(celsius + "°C = " + fahrenheit + "°F is " + stat);
    //     }
    // }   

    // celsiusToF(list);
    // console.log(newList);

/*
34. Count how many consonants are in the string "Hello World Programming".
*/

    // function countConsonants(str) {
    //     str = str.toLowerCase();

    //     const consonants = [ 'b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

    //     let counter = 0;
        
    //     for (let i = 0; i <= str.length - 1; i++) {
            
    //         for (let j = 0; j <= consonants.length - 1; j++) {
    //             if (str[i] == consonants[j]) {
    //                 counter++;  
    //             }
    //         }
            
    //     }
    //     return counter;
    // }
    
    // console.log(countConsonants("Hello World Programming")); 


/*
35. Given a list of ages [12, 25, 17, 45, 8, 33, 16], categorize and count them:

    Children: under 13
    Teens: 13-17
    Adults: 18+
*/

    // const ages = [12, 25, 17, 45, 8, 33, 16];
    // let ageCategory = [];

    // for (let i = 0; i < ages.length; i++) {
    //     let age = ages[i];

    //     if (age < 13) {
    //         ageCategory.push("Children");
    //     } else if (age >= 13 && age <= 17) {
    //         ageCategory.push("Teens");
    //     } else if (age >= 18) {
    //         ageCategory.push("Adults");
    //     } else {
    //         ageCategory.push("Not in the Category");
    //     }
    // }

    // console.log (ageCategory);
/*
36. From the list ["cat", "elephant", "dog", "butterfly", "ant"], print only words longer than 4 characters.
*/

    // let words = ["cat", "elephant", "dog", "butterfly", "ant"];
    // let newWords = [];

    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length > 4) {
    //         newWords.push(words[i]);
    //     }
    // }

    // console.log(newWords);

/*
37. Generate the first 15 Fibonacci numbers, but only print the even ones.
*/

    // function fibonacciSequence(n) {
    //     let fib = [];

    //     for (let i = 0; i < n; i++) {
    //         if (i == 0 || i == 1) {
    //             fib.push(i);
    //         } else {
    //             fib.push(fib[i - 2] + fib[i - 1]);
    //         }
    //     }

    //     let evenFib = [];

    //     for (let i = 0; i < fib.length; i++) {
    //         if (fib[i] % 2 == 0) {
    //             evenFib.push(fib[i]);
    //         }
    //     }

    //     console.log(evenFib);
    // }

    // fibonacciSequence(15);

/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
38. Create a function that calculates BMI and returns the category (Underweight: <18.5, Normal: 18.5-24.9, Overweight: 25-29.9, Obese: ≥30). Note: Look up the formula for calculating BMI.
    BMI = Weight (in Kg) / Height (in m)

*/

    // function calculateBMI (weight, height) {
    //     let resultBMI = (weight) / (height)**2

    //     if (resultBMI < 18.5) {
    //         return 'Underweight';
    //     } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
    //         return 'Normal';
    //     } else if (resultBMI >= 25 && resultBMI <= 29.9) {
    //         return 'Overweight'
    //     } else (resultBMI >= 30)
    //         return 'Obese';
    // }

    // console.log(calculateBMI(53, 1.56));

/*
39. Using a switch-case statement, create a function that takes a number (1-7) and returns the corresponding day name.
*/

    // function getDayName(dayNumber) {
    //     let dayName;

    //     switch(dayNumber) {
    //         case 1:
    //             dayName = "Sunday";
    //             break;
    //         case 2:
    //             dayName = "Monday";
    //             break;
    //         case 3:
    //             dayName = "Tuesday";
    //             break;
    //         case 4:
    //             dayName = "Wednesday";
    //             break;
    //         case 5:
    //             dayName = "Thursday";
    //             break;
    //         case 6:
    //             dayName = "Friday";
    //             break;
    //         case 7:
    //             dayName = "Saturday";
    //             break;
    //     }

    //     return dayName;
    // }

    // console.log(getDayName(2));

/*
40. Using a switch-case statement, write a basic calculator function that takes two numbers and an operator (+, -, *, /) and returns the result.
*/

    // function calculator(num1, num2, operator) {
    //     let result;

    //     switch (operator) {
    //         case '+':
    //             result = num1 + num2;
    //             break;
    //         case '-':
    //             result = num1 - num2;
    //             break;
    //         case '*':
    //             result = num1 * num2;
    //             break;
    //         case '/':
    //             result = num1 / num2;
    //             break;
    //     }

    //     return result;
    // }

    // console.log(calculator(10, 5, '*'));


/*
41. Using a switch-case statement, create a function that takes a month name and returns the number of days in that month (ignore leap years for February).
*/

    // function getDaysInMonth(month) {
    // let days;

    // switch (month.toLowerCase()) {
    //     case "january":
    //     case "march":
    //     case "may":
    //     case "july":
    //     case "august":
    //     case "october":
    //     case "december":
    //         days = 31;
    //         break;

    //     case "april":
    //     case "june":
    //     case "september":
    //     case "november":
    //         days = 30;
    //         break;

    //     case "february":
    //         days = 28;
    //         break;
    //     }

    //     return days;
    // }

    // console.log(getDaysInMonth("February"));

/*
42. Using a switch-case statement, write a function that takes an HTTP status code and returns a descriptive message for common codes.
Note: Use the status codes 200, 201, 400, 401, 403, 500 only :)
*/

// function checkStatusMessage(statusCode) {
//     let response;

//     switch (statusCode) {
//         case 200:
//             response =  'Success';
//             break;
//         case 201:
//             response = 'Created';
//             break;
//         case 400:
//             response = 'Bad Request';
//             break;
//         case 401:
//             response = 'Unauthorized';
//             break;
//         case 403:
//             response = 'Forbidden';
//             break;
//         case 500:
//             response = 'Internal Server Error';
//             break;
//         case 404:
//             response = 'Not Found';
//             break;
//     }
//     return response;
// } 

// console.log(checkStatusMessage(404));


/*
43. Using a switch-case statement, create a function that converts single Roman numerals (I, V, X, L, C, D, M) to their numeric values and handles basic combinations.
*/

    // function romanNumerals (combination) {
    //     let value;

    //     switch (combination) {
    //         case 'I':
    //             value = 1;
    //             break;
    //         case 'V':
    //             value = 5;
    //             break;
    //         case 'X':
    //             value = 10;
    //             break;
    //         case 'L':
    //             value = 50;
    //             break;
    //         case 'C':
    //             value = 100;
    //             break;
    //         case 'D':
    //             value = 500;
    //             break;
    //         case 'M':
    //             value = 1000;
    //             break;

    //     }
    //     return value;
    // }

    // console.log(romanNumerals('I'));

/*
44. Write a function that takes a traffic light color ("red", "yellow", "green") and returns the appropriate action ("Stop", "Slow down", "Go").
*/

    // function trafficLight(color) {
        
    //     if (color == "red") {
    //         return "Stop";
    //     } else if (color == "yellow") {
    //         return "Slow down";
    //     } else if (color == "green") {
    //         return "Go";
    //     } else {
    //         return "Invalid color";
    //         }
    //     }

    // console.log(trafficLight("yellow"));


/*
45. Create a function that converts temperature between Celsius and Fahrenheit based on a unit parameter ("C" to "F" or "F" to "C").
*/

    // function convertTemperature(value, unit) {
    //     let result;

    //     if (unit == "C") {
    //         result = (value * 9/5) + 32;
    //         return value + "°C = " + result + "°F";
    //     } else if (unit == "F") {
    //         result = (value - 32) * 5/9;
    //         return value + "°F = " + result + "°C";
    //     }
    // }

    // console.log(convertTemperature(12, "F"));

/*
46. Create a function that takes three sides of a triangle and determines if it's equilateral, isosceles, scalene, or not a valid triangle.
*/

    // function identifyTriangle(s1, s2, s3) {

    //     if (s1 == s2 && s2 == s3 && s3 == s1) {
    //         return "Equilateral triangle";
    //     }

    //     else if (s1 == s2) {
    //         return "Isosceles triangle";
            
    //     } else if (s1 != s2 && s2 != s3 && s3 != s1) {
    //          return "Scalene triangle";

    //     } else {
    //         return "Not a valid triangle";
    //     }
    // }

    // console.log(identifyTriangle(3, 2, 1));

/*
47. Using a switch-case statement, create a function that calculates your weight on different planets based on their gravity (Mercury: 0.38, Venus: 0.91, Mars: 0.38, etc.).
*/

    // function weightOnPlanet(earthWeight, planet) {
    //     let weight;

    //     switch (planet) {
    //         case "Mercury":
    //             weight = earthWeight * 0.38;
    //             break;
    //         case "Venus":
    //             weight = earthWeight * 0.91;
    //             break;
    //         case "Mars":
    //             weight = earthWeight * 0.38;
    //             break;
    //         case "Jupiter":
    //             weight = earthWeight * 2.34;
    //             break;
    //         case "Saturn":
    //             weight = earthWeight * 1.06;
    //             break;
    //         case "Uranus":
    //             weight = earthWeight * 0.92;
    //             break;
    //         case "Neptune":
    //             weight = earthWeight * 1.19;
    //             break;
    //     }

    //     return `Your weight on ${planet} is ${weight.toFixed(2)} kg`;
    // }

    // console.log(weightOnPlanet(76, "Mercury"));

/*
48. Create a function that counts how many times each element appears in an array.
*/


/*
49. Write a function that repeats each character in a string n times (e.g., "abc" with n=3 becomes "aaabbbccc").
*/

    // function repeatLetters(str, n) {
    //     let result = "";

    //     for (let i = 0; i < str.length; i++) {
    //         result += str[i].repeat(n);
    //     }
    //     return result;
    // }

    // console.log(repeatLetters('anselle', 3));


/*
50. Write a function that finds common elements between two arrays.
*/

    // function checkCommon (arr1, arr2) {
    //     let common = [];

    //     for (let i = 0; i < arr1.length; i++) {
    //         if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
    //             common.push(arr1[i]);
    //         }
    //     }
    //     return common;
    // }

    // const arr1 = [1, 2, 3, 4, 5, 6, 8, 9];
    // const arr2 = [3, 4, 5, 6, 7, 8];

    // console.log(checkCommon(arr1, arr2));

/*
51. Write a function that generates a random password of specified length using different character sets.
*/

    // function randomPassword(length) {
    //     const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    //     const numbers = "0123456789";

    //     const combiPass = uppercaseLetters + lowercaseLetters + numbers;

    //     let password = "";

    //     for (let i = 0; i < length; i++) {
    //         const random = Math.floor(Math.random() * combiPass.length);
    //         password += combiPass[random];
    //     }

    //     return password;
    // }

    // console.log(randomPassword(32));


/*
52. Using this array [1, 2, 3, 2, 4, 5, 1], create a function that finds the duplicates in an array.
*/

    // function findDuplicate(arr) {
    //     let duplicates = [];

    //     for (let i = 0; i < arr.length; i++) {
            
    //         for (let j = 0; j < arr.length; j++) {

    //             if (i != arr.indexOf(arr[i])) {

    //                 if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
    //                     duplicates.push(arr[i]);
    //                 }

    //             } else {
    //                 continue;
    //             }   
    //         }
    //     }
    //     return duplicates;
    // }

    // console.log(findDuplicate([1, 2, 3, 2, 1, 3, 4, 5, 1,]));

// Pabalikan po ng 32 and 33 :), ayaw po
