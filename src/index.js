import { headline, copy } from './pageload.js';
import './style.css';
import story from './story'
import location from './location'
import potatoes from './potatoes'

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
    tabmenu.appendChild(button)
}

container.appendChild(tabmenu)

for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.add('tabcontent')
    container.appendChild(tabs[i])
}




console.log('success! success! success! success! success!')