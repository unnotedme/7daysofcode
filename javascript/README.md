# #7daysofcode

## day 1

your task today is to rewrite the code below so that it prints the information correctly, makes sense and without errors:

let numberOne = 1
let stringOne = '1'
let numberThirty = 30
let stringThirty = '30'
let numberTen = 10
let stringTen = '10'

if (compare numberOne and stringOne) {
   console.log('the variables numberOne and stringOne have the same value, but different types')
} else {
   console.log('the variables numberOne and stringOne do not have the same value')
}

if (compare the numberThirty and the stringThirty) {
   console.log('the variables numberThirty and stringThirty have the same value and type')
} else {
   console.log('the variables numberThirty and stringThirty do not have the same type')
}

if (compare the numberTen and the stringTen) {
   console.log('variables numberTen and stringTen have the same value, but different types')
} else {
   console.log('variables numberTen and stringTen do not have the same value')
}

## day 2

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
2 > ahh what a pity... have you tried learning other languages?

## day 3

your challenge today is to create the possible destinations of a game, in which the user can choose:

1. if you want to go to the front-end area or go to the back-end area.

2. if you are in the front-end area, if you want to learn react or learn vue. if you are in the back-end area, you can learn c# or learn java.

3. afterwards, regardless of the previous choices, the user will be able to choose between continuing to specialize in the chosen area or continuing to develop to become a fullstack. you must display a specific message on the screen for each choice.

4. finally, ask what technologies the person would like to specialize in or learn about. here, the person can answer n technologies, one at a time. so, as long as they continues to answer ok to the question, “is there any more technology you'd like to learn?”, keep introducing her to the prompt, so they completes the name of the technology in question. and, soon after, present a message commenting something about the inserted language.

the important thing is that the person who is playing can always choose which decision to make in order to learn and develop in the programming area.

in addition, it is also essential that, at the end of the game, they can insert as many technologies as they wants in the learning list.

## day 4

you must create a little program that starts with a specific predefined value between 0 and 10 for the number you are going to guess (7, for example).

then the program will ask you what value you want to guess and, if you get it right, it will congratulate you. if you miss, he will give you 2 more attempts.

in the end, if you don't get it right, it will print what the starting number was.

once the little program is up and running, try using a random number instead of a predefined number.

## day 5

you must create a javascript program that will ask you if you want to add a food to your shopping list, and you must be able to answer with yes or no.

it will then ask you which food you want to enter, and you will enter its name, such as potato.

then, he should ask which category this food fits into, with some pre-defined options, such as fruits, dairy, frozen, sweets and whatever else you find interesting. that way, you can separate everything into its proper group.

finally, if you no longer want to add anything to the shopping list and answer no in the first question, it will display a list with all items grouped together, as follows:

if you add to your list:
banana, powdered milk, tomato, plant milk, gum, teddy bear, apple, grape, avocado and cow's milk

the program should print, for example:

shopping list:
- fruits: banana, tomato, apple, grape, avocado
- dairy: plant milk, cow's milk, powdered milk
- frozen:
- sweets: gum and teddy bear candy

## day 6

you should create the option to remove an item from the list, which will be displayed next to the question “do you want to add a food to the shopping list”?

from there, if the person chooses this option, the program will print the elements present in the current list, and the person must write which one he wants to remove.

after that, the program will remove the element from the list and print confirmation that the item really isn't there anymore.

finally, it will return to the initial cycle of questions.

if, at the time of deleting the item, it is not found in the list, you should display a message informing you of this.

for example: “cannot find item within the list!”

remember that the option to remove an item should only be available when there is at least one element in the shopping list.

## day 7

create your own calculator, but with a very important detail: each operation must be a different function in your code.

first, the person must choose an operation option printed by the program on the screen.

then, she must enter the two values she wants to use, and the program will print the result of the operation in question.

the available options should be: addition, subtraction, multiplication, division, and exit. In the latter, the program should stop running, showing a message "see you next time".