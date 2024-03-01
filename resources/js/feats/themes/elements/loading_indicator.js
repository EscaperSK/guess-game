/**
 * @returns {Element}
 */
function createLoadingIndicator() {
    const indicator = document.createElement('h1');
    indicator.textContent = 'Загрузка...';
    indicator.classList.add('loading');
    indicator.classList.add('center');

    return indicator;
}

export {
    createLoadingIndicator
};
