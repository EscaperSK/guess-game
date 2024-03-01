import { body } from '../../../core/providers/body_provider';
import { initThemesScreen } from '../../themes/screens/themes_screen';

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

    const centerDiv = document.createElement('div');
    centerDiv.classList.add('center');

    const h1 = document.createElement('h1');
    h1.textContent = 'Результаты';
    centerDiv.appendChild(h1);

    for (const item of results) {
        const h4 = document.createElement('h4');
        h4.textContent = item;
        centerDiv.appendChild(h4);
    }

    const a = document.createElement('a');
    a.textContent = 'Вернуться на главную';
    a.href = '';
    a.onclick = () => {
        initThemesScreen();
        return false;
    };

    centerDiv.appendChild(a);

    body.appendChild(centerDiv);
}
