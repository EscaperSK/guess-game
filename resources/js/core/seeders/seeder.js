import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { animeSeed } from './anime_seed';
import { programmingSeed } from './programming_seed';

function seedAnime() {
    const ref = doc(db, 'themes', 'jCItH7uikRInrMmwdbFl');
    updateDoc(ref, { items: animeSeed });
}

function seedProgramming() {
    const ref = doc(db, 'themes', 'iYRCKwJ566NP14Kpkc2c');
    updateDoc(ref, { items: programmingSeed });
}

export {
    seedAnime,
    seedProgramming
};
