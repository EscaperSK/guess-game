/**
 * @param {number} max
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function lockLandscape(lock = true) {
    try {
        if (lock) await screen.orientation.lock('landscape-primary');
        else screen.orientation.unlock();
    } catch (_) { }
}

export {
    getRandomInt,
    lockLandscape
};
