import alphabetCyrillic from 'src/app/data/sections/serbian/alphabet-cyrillic';
import alphabetLatin from 'src/app/data/sections/serbian/alphabet-latin';
import base from 'src/app/data/sections/serbian/base';
import { Section } from 'src/app/interfaces/section';

export const Serbian: Section = {
  name: 'Сербский',
  categories: [
    alphabetCyrillic,
    alphabetLatin,
    base
  ],
};
