import alphabetCyrillic from 'src/app/data/sections/serbian/alphabet-cyrillic';
import alphabetLatin from 'src/app/data/sections/serbian/alphabet-latin';
import { Section } from 'src/app/interfaces/section';

export const Serbian: Section = {
  name: 'Сербский',
  categories: [
    alphabetCyrillic,
    alphabetLatin,
  ],
};
