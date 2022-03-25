function fizzBuzz(a,b){

    let sum = a.length + b.length;
    
    if(sum%3===0){

        console.log("Fizz");

    }else if(sum%5===0){


        console.log("Buzz")

    }else if((sum%3===0) && (sum%5===0)){

        console.log("FizzBuzz")

    }

}

fizzBuzz("rayoh","kalzykalzy");
