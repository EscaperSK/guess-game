import { initThemesScreen } from "../../themes/screens/themes_screen";

function createBackButton() {
    const button = document.createElement('a');
    button.textContent = 'Вернуться на главную';
    button.href = '';
    button.onclick = () => {
        initThemesScreen();
        return false;
    };

    return button;
}

export {
    createBackButton
};
