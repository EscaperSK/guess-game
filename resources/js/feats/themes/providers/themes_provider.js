import { Theme } from '../models/theme';
import { requestThemes } from '../repos/theme_repo';

/** @type {Theme[]} */
let themes = [];

async function initThemes() {
    try {
        themes = await requestThemes();
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

export {
    initThemes,
    themes
};
