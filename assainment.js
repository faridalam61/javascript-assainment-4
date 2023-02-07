// Problem 1
/* This function takes a positive number as input and returns the number multiplying by 3 then adds 10 and divides the result by 2 and finally substract 5  from the number*/
function mindGame(number) {

    if (typeof number === 'number' && number >= 0) {
        const result = (((number * 3) + 10) / 2) - 5;
        return result;
    } else {
        return 'Enter a valid number';
    }

}

// Problem 2
/* 
function takes a string input. If the sting length is even it returns 'Even' else it returns 'Odd'
 */
function evenOdd(string) {
    if (typeof string === 'string') {
        const numberOfChar = string.length;
        if (numberOfChar % 2 === 0) {
            return 'Even';
        } else {
            return 'Odd';
        }
    } else {
        return 'Invalid string';
    }
}

// Problem 3
/* 
function takes a number as input and compares the number with 7; If the number is less then 7 it substracts 7 from the number and returns the result. If the number is greater than 7 then it returns double of the inputed number
 */
function isLGSeven(number) {
    if (typeof number === 'number') {
        if (number < 7) {
            return number - 7;
        } else {
            return number * 2;
        }
    } else {
        return 'Invalid number';
    }
}

// Problem 4
/* 
   function takes a number array as input. It checks all the numbers inside the array. If the numbers are  positive or negative. It counts all negative numbers and returns how many negative numbers are there.
*/

function findingBadData(numbers) {
    if (Array.isArray(numbers) === true) {
        let totalBadData = 0;
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            if (number < 0) {
                totalBadData++;
            }
        }
        return totalBadData;
    } else {
        return 'Enter a valid array';
    }
}

// Problem 5
/* 
    This function takes 3 number perameters. It multiplies the fist perameter with 21 second perameter with 32 and third perameter with 43. After that it adds all multiplied values and checks if the total is greater than 2000 or not. If the total is less then 2000 it returns the result else it substract 2000 from the result and returns the result.
*/
function gemsToDiamond(number1, number2, number3) {
    if (typeof number1 === 'number' && typeof number2 === 'number' && typeof number3 === 'number') {
        if (number1 >= 0 && number2 >= 00 && number3 >= 0) {
            const firstFriendGemsPower = 21;
            const secondFriendGemsPower = 32;
            const thirdFriendGemsPower = 43;

            const firstFirendDiamond = number1 * firstFriendGemsPower;
            const secondFriendDiamond = number2 * secondFriendGemsPower;
            const thirdFirendDiamond = number3 * thirdFriendGemsPower;

            const totalDiamond = firstFirendDiamond + secondFriendDiamond + thirdFirendDiamond;
            if (totalDiamond > 1000 * 2) {
                return totalDiamond - 2000;
            } else {
                return totalDiamond;
            }
        } else {
            return 'Enter positive numbers';
        }
    } else {
        return 'Please enter valid numbers';
    }
}