/*## day 2

today, i'm going to teach you how to develop a program simulating one of these sites. it should ask the user to answer 3 questions:

- what is your name?
- how old are you?
- what programming language are you studying?

as questions are being asked, the person using the program must answer each one.

at the end, the system will display the message:

"hello **name**, you're **age** and you're already learning **language**!"

note that each piece of information is one of the answers given by the person.

#### optional exercise

you will complement the code so that, after displaying the previous message, the program asks:

do you like to study **language**? answer with the number 1 for YES or 2 for NO.

and then, depending on the answer, it should show one of the following messages:

1 > very good! keep studying and you will be very successful.
2 > ahh what a pity... have you tried learning other languages?*/

const name = prompt('what is your name?');
const age = prompt('how old are you?');
const language = prompt('what programming language are you studying?');
const message = `hello ${name}, you're ${age} and you're are learning ${language}!`;

alert(message);

const likes = prompt('do you like to study ' + language + '? answer with the number 1 for YES or 2 for NO.');
    if (likes === '1') {
        alert('very good! keep studying and you will be very successful.');
    } else if (likes === '2') {
        alert('ahh what a pity... have you tried learning other languages?');
    } else {
        alert('please answer with the number 1 for YES or 2 for NO.');
    }