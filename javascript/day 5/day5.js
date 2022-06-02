/* ## day 5

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
- sweets: gum and teddy bear candy */

let food = "";
let category = "";

let fruits = [];
let dairy = [];
let frozen = [];
let sweets = [];

let addMore = "yes";
while (addMore != "no") {
    addMore = prompt("do you want to add a food to your shopping list?");
    while (addMore != "yes" && addMore != "no") {
        alert("please enter yes or no");
        addMore = prompt("do you want to add a food to your shopping list?");
    }

    if (addMore === "no") {
        break;
    }

    food = prompt("what food do you want to add?");
    category = prompt("what category does this food belong to?");
    if (category === "fruits") {
        fruits.push(food);
    } else if (category === "dairy") {
        dairy.push(food);
    } else if (category === "frozen") {
        frozen.push(food);
    } else if (category === "sweets") {
        sweets.push(food);
    } else {
        alert("you did not enter a valid category");
    }
}

alert("shopping list: \n- fruits: " + fruits + "\n- dairy: " + dairy + "\n- frozen: " + frozen + "\n- sweets: " + sweets);
