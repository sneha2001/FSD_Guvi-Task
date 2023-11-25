// 1. For the given JSON iterate over all for loops(for, for in, for of, for each)

var log = (param) => console.log(param);
log("This is 3rd Task");
log("...............................................");

const studentDetails = {
    name : "Kalilur Rahman",
    place : "Tiruvallur",
    age : 25,
    isProfessional : "ServiceNow Developer",
    degree : "B.Tech.CSE"
}

//General for loop
//Getting keys as arrays

var studentKeys = Object.keys(studentDetails);
console.log("The keys are :",studentKeys);

log(".....................For Loop..........................");
for (let i = 0; i < studentKeys.length; i++){
    console.log(i, "-",studentKeys[i]);
}

var studentValues = Object.values(studentDetails);
console.log("The values are :", studentValues);

for (let i = 0; i < studentValues.length; i++){
    console.log(i, "-",studentValues[i]);
}

// For In Loop :
log("...................For In Loop............................");
for (obj in studentDetails){

    if (obj == "name"){
        studentDetails[obj] = "Kalilur Rahman A R"; // --> way for accessing values
    }
   
    console.log(obj + " : " +studentDetails[obj]);
}
log(studentDetails);

//For of Loop
log("...................For of Loop............................");

for (arr of studentKeys){
        console.log(arr+ " : " +studentDetails[arr]); // --> way for accessing values
}

log("...................For each Loop............................");

log(".........Getting keys..........");
studentKeys.forEach((values, index, actArray) => console.log(values, index, actArray));

log(".........Getting Values..........");
studentValues.forEach((values, index, actArray) => console.log(values, index, actArray));

// Create your own resume data in JSON format?

const myResume = {
    name : "Sneha harigharun",
    Degree : "BCA",
    experience : "1 year",
    skills : "MS Office, VS Code",
    languages : "Javascript, Python, HTML, Css",
    address : "No:755, Omega church street, Nadhukuthagai, Chennai",
    pincode : 602024,
    isMarried : True,
}

log("--- Getting keys from myResume ---");
myKeys = Object.keys(myResume);
for (getKey in myKeys){
    console.log(getKey + ". " + myKeys[getKey]);
}

log("--- Getting Values from myResume ---");
myValue = Object.values(myResume);
for (getValue in myValue){
    console.log(getValue + ". " + myValue[getValue]);
}

log("--- Getting keys and Values from myResume ---");
for (myDetails in myResume){
    console.log(myDetails + " : " + myResume[myDetails] + ".");
}


/* 
Read about the difference between window, screen and document in java script?

window : is the execution context and global object for that context's JavaScript
document : contains the DOM, initialized by parsing HTML
screen : describes the physical display's full screen

*/
