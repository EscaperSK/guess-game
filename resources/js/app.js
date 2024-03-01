import '../css/style.css';
import { initBody } from './core/providers/body_provider';
import { initThemesScreen } from './feats/themes/screens/themes_screen';

(async function start() {
    initBody();

    initThemesScreen();
})();
