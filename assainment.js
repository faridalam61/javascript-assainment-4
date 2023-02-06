// Problem 1: lets play a mind game
function mindGame(number){
    const result = (((number * 3) + 10) / 2) -5;
    return result;
}


// Problem 2: Finding even or odd

function evenOdd(string){
    const numberOfChar = string.length;
    if(numberOfChar % 2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}


// Problem 3: Is Less or Greater than seven

function isLGSeven(number){
    if(number < 7){
        return number - 7;
    }else{
        return number+number;
    }
}

// Problem 4: Finding Bad data

function findingBadData(numbers){

    let totalBadData = 0;
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number < 0){
            totalBadData++;
        }
    }
    return totalBadData;
}

// Problem 5: Convert your gems into diamond
function gemsToDiamond(number1,number2,number3){
    const firstFriendGemsPower = 21;
    const secondFriendGemsPower = 32;
    const thirdFriendGemsPower = 43;

    const firstFirendDiamond = number1 * firstFriendGemsPower;
    const secondFriendDiamond = number2 * secondFriendGemsPower;
    const thirdFirendDiamond = number3 * thirdFriendGemsPower;
    
    const totalDiamond = firstFirendDiamond+secondFriendDiamond+thirdFirendDiamond;
    if(totalDiamond > 1000 * 2){
        return totalDiamond - 2000;
    }else{
        return totalDiamond;
    }




}

const diamond = gemsToDiamond(100,5,1);
console.log(diamond);