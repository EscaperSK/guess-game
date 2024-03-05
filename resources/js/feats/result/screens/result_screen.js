import { body } from '../../../core/providers/body_provider';
import { lockLandscape } from '../../../helpers/utils';
import { createHomeButton } from '../elements/back_button';

/** @type {string[]} */
let results = [];

/**
 * @param {string[]} items 
 */
function initResultScreen(items) {
    results = items;

    lockLandscape(false);

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
    result.appendChild(createHomeButton());

    const wordList = document.createElement('div');
    wordList.classList.add('word-list');
    for (const item of results) {
        const word = document.createElement('h4');
        word.classList.add('word');
        word.textContent = item;
        wordList.appendChild(word);
    }

    result.appendChild(wordList);
    result.appendChild(createHomeButton());

    body.appendChild(result);
}
