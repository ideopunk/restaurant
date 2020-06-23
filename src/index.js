import { headline, copy } from './pageload.js';
import './style.css';
import story from './story'
import location from './location'
import potatoes from './potatoes'

const container = document.querySelector('#content');
container.appendChild(headline);
container.appendChild(copy);
// test
container.appendChild(story);
container.appendChild(potatoes);
container.appendChild(location);


console.log('success! success! success! success! success!')