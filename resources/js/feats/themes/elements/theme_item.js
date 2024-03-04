import { initGameScreen } from '../../game/screens/game_screen';
import { Theme } from '../models/theme';

/**
 * @param {Theme} theme
 * 
 * @returns {Element}
 */
function createThemeItem(theme) {
    const themeItem = document.createElement('a');
    themeItem.classList.add('theme-item');
    themeItem.textContent = theme.name;
    themeItem.href = '';

    themeItem.onclick = () => {
        initGameScreen(theme);
        return false;
    };

    return themeItem;
}

export {
    createThemeItem
};
