/* 
<!-- GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript -->
<!-- <!DOCTYPE html>
<html>
<head>
	<title>Alert Example</title>
	<script>
		function showAlert() {
			alert("This is an alert!");
		}
	</script>
</head>
<body>

	<button onclick="showAlert()">Click me to show alert</button>

</body>
</html>
----------------------------------------------------------
<!DOCTYPE html>
<html>
<body>
  <script src="FSD_Task 5-Rahman.js"></script>
</body>
</html>
-----------------------------------------------------

Explain the below how it works

explain.html

<!DOCTYPE html>
<html>
<body>
 <script src="FSD_Task 5-Rahman.js"></script>
</body>
</html>

script.js
alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is not a multiple line code and its working
-----------------------------------------------------------


<!DOCTYPE html>
<html>
<body>
 <script src="FSD_Task 5-Rahman.js"></script>
</body>
</html>

script.js

let admin=9, fname=10.5; 
fname = "Guvi";
let lname = "geek"
admin = fname+ " " +lname;
alert( admin ); // "Guvi geek"
-----------------------------------------------------------------
Fix the below to alert hello Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+ " " +lname;
alert( `hello ${name}` );
----------------------------------------------------------------


Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);
---------------------------------------------------------------------
If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>


script.js

var a = "22" > "124";
//Don't touch below this0
console.log(a)
//this a is boolean it is returning true so this is the case its going for code is blasted
if (!a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
--------------------------------------------------------------
How to get the success in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
//to get success in console, without entering any values in prompt if user hit ok then success will visible
--------------------------------------------------------------------
How to get the correct score in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let value = prompt('How many runs you scored in this ball');
if (value === '4') {
      console.log("You hit a Four");
} else if (value === '6') {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
------------------------------------------------------------------


Fix the code to welcome the Employee

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

//nested ternary operatory
let login = 'Employee';
let message = (login == 'Employee') ? (login != 'Director' ? 'Greetings' :'No Login') : '';
console.log(message)
--------------------------------------------------------------
Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

// You cant change the value of the msg
let message;

message = 'true'
if (message = 'true')
{
 let message = "welcome boss";
 console.log(message)
}
else
{
 let message = "Go away";
 console.log(message)
}
//   console.log(message);
--------------------------------------------------------
Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "welcome";
}
else
{
 message = "Go away";
}
  console.log(message);
-------------------------------------------------------
Change the code to print

3

2

1

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}
-----------------------------------------------------

Change the code to print even numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
    if(num % 2 == 0){
        console.log(num)
    }
  }
-----------------------------------------------------------


Change the code to print all the gifts

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
-----------------------------------------------------

Whats the msg printed and why? Guess you answer before running it.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);
// printed message is "hi", because the if condition it checks first string datatype
--------------------------------------------------------------------------






*/

