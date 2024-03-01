import { initGameScreen } from '../../game/screens/game_screen';
import { Theme } from '../models/theme';

/**
 * @param {Theme} theme
 * 
 * @returns {Element}
 */
function createThemeItem(theme) {
    const themeItem = document.createElement('a');
    themeItem.href = '';

    themeItem.onclick = () => {
        initGameScreen(theme);
        return false;
    };

    const head = document.createElement('h4');
    head.textContent = theme.name;

    themeItem.appendChild(head);

    return themeItem;
}

export {
    createThemeItem
};
