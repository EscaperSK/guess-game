import { initThemesScreen } from "../../themes/screens/themes_screen";

function createHomeButton() {
    const button = document.createElement('a');
    button.textContent = 'Вернуться на главную';
    button.classList.add('home-btn');
    button.href = '';
    button.onclick = () => {
        initThemesScreen();
        return false;
    };

    return button;
}

export {
    createHomeButton
};
