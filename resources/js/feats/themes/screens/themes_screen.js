import { body } from '../../../core/providers/body_provider';
import { createLoadingIndicator } from '../elements/loading_indicator';
import { createThemeItem } from '../elements/theme_item';
import { initThemes, themes } from '../providers/themes_provider';

async function initThemesScreen() {
    if (!themes.length) {
        body.replaceChildren(createLoadingIndicator());

        await initThemes();
    }

    drawThemesScreen();
}

export {
    initThemesScreen
};

function drawThemesScreen() {
    body.replaceChildren();

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const h1 = document.createElement('h1');
    h1.classList.add('header');
    h1.textContent = 'Темы';
    menu.appendChild(h1);

    iosDumbShit();

    const themeList = document.createElement('div');
    themeList.classList.add('theme-list');
    for (const theme of themes) {
        const themeNode = createThemeItem(theme);

        themeList.appendChild(themeNode);
    }
    menu.appendChild(themeList);

    body.appendChild(menu);
}

async function iosDumbShit() {
    if (typeof DeviceOrientationEvent['requestPermission'] !== 'function') return;

    try {
        const pre = await DeviceOrientationEvent['requestPermission']();
        if (pre === 'granted') {
            return;
        }
    } catch (_) { }

    const button = document.createElement('button');
    button.textContent = 'Allow orientation tracking';
    body.appendChild(button);

    button.onclick = async () => {
        const response = await DeviceOrientationEvent['requestPermission']();
        if (response === 'granted') {
            button.remove();
        }
    };
}
