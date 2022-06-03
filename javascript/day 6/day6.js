/* ## day 6

you should create the option to remove an item from the list, which will be displayed next to the question “do you want to add a food to the shopping list”?

from there, if the person chooses this option, the program will print the elements present in the current list, and the person must write which one he wants to remove.

after that, the program will remove the element from the list and print confirmation that the item really isn't there anymore.

finally, it will return to the initial cycle of questions.

if, at the time of deleting the item, it is not found in the list, you should display a message informing you of this.

for example: “cannot find item within the list!”

remember that the option to remove an item should only be available when there is at least one element in the shopping list. */

let fruits = [];
let dairy = [];
let sweets = [];
let frozen = [];

let food = "";
let category = "";
let remove = "";

let addFood = "yes";
while (addFood != "no") {
    if (fruit.length === 0 && dairy.length === 0 && sweets.length === 0 && frozen.length === 0) {
        addFood = prompt("do you want to add a food to the shopping list? answer yes or no");
    } else {
        addFood = prompt("do you want to add a food to the shopping list? answer yes or no or remove");
    }

    while (addFood != "no" && addFood != "yes" && addFood != "remove") {
        alert("please answer yes or no or remove");
        addFood = prompt("do you want to add a food to the shopping list? answer yes or no or remove");
    }

    if (addFood === "no") {
        break;
    }

    if (addFood === "yes") {
        food = prompt("what food do you want to add?");
        category = prompt("what category do you want to add it to? answer fruits, dairy, sweets or frozen");
        if (category === "fruits") {
            fruits.push(food);
        } else if (category === "dairy") {
            dairy.push(food);
        } else if (category === "sweets") {
            sweets.push(food);
        } else if (category === "frozen") {
            frozen.push(food);
        } else {
            alert("this category was not found");
        }
    } else if (addFood === "remove") {
        if (fruits.length === 0 && dairy.length === 0 && sweets.length === 0 && frozen.length === 0) {
            alert("there is nothing to remove");
        } else {
            remove = prompt("what food do you want to remove?");
            if (fruits.includes(remove)) {
                fruits.splice(fruits.indexOf(remove), 1);
                alert(remove + " was removed from the list");
            } else if (dairy.includes(remove)) {
                dairy.splice(dairy.indexOf(remove), 1);
                alert(remove + " was removed from the list");
            } else if (sweets.includes(remove)) {
                sweets.splice(sweets.indexOf(remove), 1);
                alert(remove + " was removed from the list");
            } else if (frozen.includes(remove)) {
                frozen.splice(frozen.indexOf(remove), 1);
                alert(remove + " was removed from the list");
            } else {
                alert("this item was not found");
            }
        }
    }
}
alert("shopping list:\n" + "fruits: " + fruits + "\ndairy: " + dairy + "\nsweets: " + sweets + "\nfrozen: " + frozen);