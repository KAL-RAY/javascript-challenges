function arrayToObject(someArray){
    
    let evens = [];
    let odds  = [];
    let chars = [];

    for(i=0;i<someArray.length;i++){

        if(someArray[i]%2===1){

            odds.push(someArray[i]);
        } else if(someArray[i]%2===0){
        
            evens.push(someArray[i]);
        } else {
            
            chars.push(someArray[i]);
        }

    }

    let newObject = {}
    newObject.evens = evens
    newObject.odds  = odds
    newObject.chars = chars

    console.log(newObject)
    
}

arrayToObject([3.0, "a" ,7 ,"x",20,"d",4,"f",8]);