import { QueryDocumentSnapshot } from 'firebase/firestore';

class Theme {
    /**
     * @param {string} id
     * @param {string} name
     * @param {string[]} items
     */
    constructor(id, name, items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }
}

const themeConverter = {
    toFirestore: () => ({}),

    fromFirestore: (
        /** @type {QueryDocumentSnapshot} */ snapshot,
        /** @type {import('firebase/firestore').SnapshotOptions} */ options
    ) => {
        const data = snapshot.data(options);

        return new Theme(snapshot.id, data.name, data.items);
    }
};

export {
    Theme,
    themeConverter
};
