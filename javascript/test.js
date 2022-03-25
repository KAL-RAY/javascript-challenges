function ageCategory(){

    const birthYear = prompt("What is your year of birth");
    let today = new Date();
    let yearNow = today.getFullYear();
    let age = yearNow - birthYear;
    if(age<18){

        console.log("You are a minor");
    
    }else if(age>35){
         
        console.log("you are an elder");
    }else{

        console.log("You are a youth");
    }  

}

ageCategory();
