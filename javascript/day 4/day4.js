/*## day 4

you must create a little program that starts with a specific predefined value between 0 and 10 for the number you are going to guess (7, for example).

then the program will ask you what value you want to guess and, if you get it right, it will congratulate you. if you miss, he will give you 2 more attempts.

in the end, if you don't get it right, it will print what the starting number was.

once the little program is up and running, try using a random number instead of a predefined number.*/

var number = Math.floor(Math.random() * 10);
let guess = "";

for(let count = 0; count < 3; count++){
    guess = prompt("guess a number between 0 and 10");
    if(guess == number){
        alert("you guessed it right!");
        break;
    }
    else{
        alert("you guess it wrong!");
    }
}

if(guess != number){
    alert("the number was " + number);
}