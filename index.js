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