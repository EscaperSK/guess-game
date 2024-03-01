import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../../core/services/firebase';
import { Theme, themeConverter } from '../models/theme';

/**
 * @returns {Promise<Theme[]>}
 */
async function requestThemes() {
    const snapshot = await getDocs(query(
        collection(db, 'themes'),
        orderBy('sort_index'),
    ).withConverter(themeConverter));

    const result = [];

    for (const doc of snapshot.docs) {
        const data = doc.data();

        result.push(data);
    }

    return result;
}

export {
    requestThemes
};
