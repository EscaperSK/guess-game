/**
 * @returns {Element}
 */
function createLoadingIndicator() {
    const indicator = document.createElement('h1');
    indicator.textContent = 'Загрузка...';
    indicator.classList.add('abs-center');
    indicator.classList.add('loading');

    return indicator;
}

export {
    createLoadingIndicator
};
