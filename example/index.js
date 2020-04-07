import { LoremIpsum } from 'lorem-ipsum';
const style = require('./assets/styles/style.scss');

const lorem = new LoremIpsum();

const div = document.createElement('div');
div.className = 'container';

const h1 = document.createElement('h1');
h1.innerText = lorem.generateWords(5);
div.appendChild(h1);

const paragraph = document.createElement('p');
paragraph.innerHTML = `${lorem.generateSentences(5)} <strong>${lorem.generateSentences(1)}</strong> ${lorem.generateSentences(5)}`;
div.appendChild(paragraph);
document.body.appendChild(div);

