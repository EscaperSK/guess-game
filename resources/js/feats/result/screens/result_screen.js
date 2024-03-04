import { body } from '../../../core/providers/body_provider';
import { createBackButton } from '../elements/back_button';

/** @type {string[]} */
let results = [];

/**
 * @param {string[]} items 
 */
function initResultScreen(items) {
    results = items;

    drawResultScreen();
}

export {
    initResultScreen
};

function drawResultScreen() {
    body.replaceChildren();

    const result = document.createElement('div');
    result.classList.add('result');

    const h1 = document.createElement('h1');
    h1.textContent = 'Результаты';
    h1.classList.add('header');

    result.appendChild(h1);
    result.appendChild(createBackButton());

    const wordList = document.createElement('div');
    wordList.classList.add('word-list');
    for (const item of results) {
        const h4 = document.createElement('h4');
        h4.textContent = item;
        wordList.appendChild(h4);
    }

    result.appendChild(wordList);
    result.appendChild(createBackButton());

    body.appendChild(result);
}
