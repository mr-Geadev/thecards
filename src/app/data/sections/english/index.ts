import introductoryWords from 'src/app/data/sections/english/introductory-words';
import lesson0103 from 'src/app/data/sections/english/lesson-0103';
import lesson0603 from 'src/app/data/sections/english/lesson-0603';
import lesson14Febrary from 'src/app/data/sections/english/lesson-14-febrary';
import lesson2802 from 'src/app/data/sections/english/lesson-2802';
import timeConditions from 'src/app/data/sections/english/time-conditions';

import { Section } from 'src/app/interfaces/section';

export const English: Section = {
  name: 'Английский',
  categories: [
    introductoryWords,
    lesson14Febrary,
    lesson2802,
    lesson0103,
    timeConditions,
    lesson0603
  ],
};
