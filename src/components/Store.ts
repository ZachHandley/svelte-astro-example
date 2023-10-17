import { persistentAtom } from '@nanostores/persistent';

export const someAtom = persistentAtom<string>('someAtom', 'oohyeah');
