import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { animeSeed } from './anime_seed';
import { blizzardSeed } from './blizzard_seed';
import { dotaSeed } from './dota_seed';
import { lolSeed } from './lol_seed';
import { mythSeed } from './myth_seed';
import { programmingSeed } from './programming_seed';

function seedAnime() {
    const ref = doc(db, 'themes', 'jCItH7uikRInrMmwdbFl');
    updateDoc(ref, { items: animeSeed });
}

function seedProgramming() {
    const ref = doc(db, 'themes', 'iYRCKwJ566NP14Kpkc2c');
    updateDoc(ref, { items: programmingSeed });
}

function seedLol() {
    const ref = doc(db, 'themes', 'VP415OD8Imz2SfpJlZUK');
    updateDoc(ref, { items: lolSeed });
}

function seedDota() {
    const ref = doc(db, 'themes', 'hQKlqz3eOvf399lXTMb2');
    updateDoc(ref, { items: dotaSeed });
}

function seedMyth() {
    const ref = doc(db, 'themes', 'ck5DX1onTyZztwGn6nKW');
    updateDoc(ref, { items: mythSeed });
}

function seedBlizzard() {
    const ref = doc(db, 'themes', 'wrAlG30uJlEugjABLoA4');
    updateDoc(ref, { items: blizzardSeed });
}

export {
    seedAnime,
    seedBlizzard,
    seedDota,
    seedLol,
    seedMyth,
    seedProgramming
};
