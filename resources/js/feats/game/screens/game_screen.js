import { body } from '../../../core/providers/body_provider';
import { getRandomInt } from '../../../helpers/utils';
import { initResultScreen } from '../../result/screens/result_screen';
import { Theme } from '../../themes/models/theme';

/** @type {Element} */
let h1;
/** @type {Element} */
let timer;
/** @type {NodeJS.Timeout | undefined} */
let timeTiker;
/** @type {NodeJS.Timeout | undefined} */
let skipTimeout;
/** @type {NodeJS.Timeout | undefined} */
let getReadyTimeout;

/** @type {string[]} */
let items;
/** @type {string[]} */
let usedItems;

/** @type {boolean} */
let canSkip;
/** @type {number} */
let seconds;

/**
 * @param {Theme} theme
 */
async function initGameScreen(theme) {
    items = [...theme.items];

    timeTiker = undefined;
    skipTimeout = undefined;
    getReadyTimeout = undefined;

    usedItems = [];

    canSkip = true;
    seconds = 180;

    drawGameScreen();
}

export {
    initGameScreen
};

async function drawGameScreen() {
    body.replaceChildren();

    const game = document.createElement('div');
    game.classList.add('game-wrapper');

    const wordCard = document.createElement('div');
    wordCard.classList.add('word-card');
    game.appendChild(wordCard);

    h1 = document.createElement('h1');
    h1.textContent = 'Приготовьтесь';

    timer = document.createElement('h3');
    timer.textContent = `${seconds}`;

    wordCard.appendChild(h1);
    body.appendChild(game);

    await new Promise((r) => getReadyTimeout = setTimeout(r, 1000 * 3));

    wordCard.appendChild(document.createElement('br'));
    wordCard.appendChild(timer);

    nextWord();

    timeTiker = setInterval(onTimeTik, 1000);

    window.addEventListener('deviceorientation', onOrientationChange);
}

function nextWord() {
    if (!canSkip) return;
    if (!items.length) {
        toResultScreen();
        return;
    }

    canSkip = false;
    skipTimeout = setTimeout(
        () => canSkip = true,
        1000 * 1,
    );

    const index = getRandomInt(items.length);
    const item = items.splice(index, 1)[0];

    h1.textContent = item;
    usedItems.push(item);
}

function onTimeTik() {
    timer.textContent = `${--seconds}`;
    if (seconds > 0) return;

    clearInterval(timeTiker);
    toResultScreen();
}

/**
 * @param {DeviceOrientationEvent} event
 */
function onOrientationChange(event) {
    const g = Math.floor(event.gamma ?? 0);
    const up = g > 0 && g < 30;
    const down = g > -30 && g < 0;

    if (!up && !down) return;

    nextWord();
}

function toResultScreen() {
    clearInterval(timeTiker);
    clearInterval(skipTimeout);
    clearInterval(getReadyTimeout);

    initResultScreen(usedItems);
}
