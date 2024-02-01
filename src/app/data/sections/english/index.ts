import introductoryWords from 'src/app/data/sections/english/introductory-words';
import pronouns from 'src/app/data/sections/english/pronouns';
import verbs from 'src/app/data/sections/english/verbs';

import { Section } from 'src/app/interfaces/section';

export const English: Section = {
  name: 'Английский',
  categories: [
    introductoryWords,
    verbs,
    pronouns,
  ],
};
