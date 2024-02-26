import introductoryWords from 'src/app/data/sections/english/introductory-words';
import lesson14Febrary from 'src/app/data/sections/english/lesson-14-febrary';
import pronouns from 'src/app/data/sections/english/pronouns';
import test from 'src/app/data/sections/english/test';
import verbs from 'src/app/data/sections/english/verbs';

import { Section } from 'src/app/interfaces/section';

export const English: Section = {
  name: 'Английский',
  categories: [
    introductoryWords,
    verbs,
    pronouns,
    test,
    lesson14Febrary
  ],
};
