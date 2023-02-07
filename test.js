
function mindGame(number){

    if(typeof number === 'number' && number >= 0){
       const result = (((number * 3) + 10) / 2) -5;
       return result;
    }else{
        return 'Enter a valid number';
    }
    
}

const aa = mindGame(0);
console.log(aa);