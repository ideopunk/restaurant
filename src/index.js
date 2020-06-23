import { headline, copy } from './pageload.js';
import './style.css';
import story from './story'
import location from './location'
import potatoes from './potatoes'

function switchtab(event) {
    let i, tabcontent, tabLinks, targetValue;

    // reset all the others
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tabLinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    console.log(event.path[0].value)

    targetValue = event.path[0].value;

    document.getElementById(targetValue).style.display = "block";
    event.currentTarget.className += " active";
}


let tabs = [story, location, potatoes]

const container = document.querySelector('#content');

container.appendChild(headline);
container.appendChild(copy);

const tabmenu = document.createElement('div');
tabmenu.classList.add("tab")


for (let i = 0; i < tabs.length; i++) {
    let button = document.createElement('button');
    button.classList.add('tabLinks');
    button.textContent = tabs[i].id;
    button.value = tabs[i].id;
    button.addEventListener('click', switchtab)
    tabmenu.appendChild(button)
}

container.appendChild(tabmenu)

for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.add('tabcontent')
    container.appendChild(tabs[i])
}




console.log('success! success! success! success! success! success!')