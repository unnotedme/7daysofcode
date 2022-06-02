/*## day 3

your challenge today is to create the possible destinations of a game, in which the user can choose:

1. if you want to go to the front-end area or go to the back-end area.

2. if you are in the front-end area, if you want to learn react or learn vue. if you are in the back-end area, you can learn c# or learn java.

3. afterwards, regardless of the previous choices, the user will be able to choose between continuing to specialize in the chosen area or continuing to develop to become a fullstack. you must display a specific message on the screen for each choice.

4. finally, ask what technologies the person would like to specialize in or learn about. here, the person can answer n technologies, one at a time. so, as long as they continues to answer ok to the question, “is there any more technology you'd like to learn?”, keep introducing her to the prompt, so they completes the name of the technology in question. and, soon after, present a message commenting something about the inserted language.

the important thing is that the person who is playing can always choose which decision to make in order to learn and develop in the programming area.

in addition, it is also essential that, at the end of the game, they can insert as many technologies as they wants in the learning list.*/


const frontback = prompt('do you want to go to the front-end area or go to the back-end area?');
    if (frontback === 'front-end') {
        const frontend = prompt('if you are in the front-end area, if you want to learn react or learn vue?');
            if (frontend === 'react') {
                alert('you are learning react!');
            } else if (frontend === 'vue') {
                alert('you are learning vue!');
            } else {
                alert('please answer with the "react" or "vue".');
            }
    } else if (frontback === '2') {
        const backend = prompt(' if you are in the back-end area, you can learn c# or learn java?');
            if (backend === 'c#') {
                alert('you are learning c#!');
            } else if (backend === 'java') {
                alert('you are learning java!');
            } else {
                alert('please answer with "c#" or "java".');
            }
    } else {
        alert('please answer with "front-end" or "back-end".');
    }

const specialization = prompt('do you want to continue to specialize in the chosen area or continue to develop to become a fullstack?');
    if (specialization === 'specialize') {
        alert('you are continuing to specialize in the chosen area!');
    } else if (specialization === 'develop') {
        alert('you are continuing to develop to become a fullstack!');
    } else {
        alert('please answer with "specialize" or "develop".');
    }

let technologies = prompt('is there any technologies that you would like to specialize in or learn about? enter "ok" to continue.');
    while (technologies === 'ok') {
        let newTechnology= prompt('which?');
        alert(newTechnology + 'is a really good technology!');
        technologies = prompt('is there any technologies that you would like to specialize in or learn about? enter "ok" to continue.');
    }