/** @type {HTMLBodyElement} */
let body;

function initBody() {
    const bodyElement = document.querySelector('body');
    if (bodyElement === null) return;

    body = bodyElement;
}

export {
    body,
    initBody
};
