import angularUpdateArticles from 'src/app/data/sections/english/angular-update-articles';
import april from 'src/app/data/sections/english/april';
import guiltyWords from 'src/app/data/sections/english/guilty-words';
import introductoryWords from 'src/app/data/sections/english/introductory-words';
import lesson0103 from 'src/app/data/sections/english/lesson-0103';
import lesson0603 from 'src/app/data/sections/english/lesson-0603';
import lesson14Febrary from 'src/app/data/sections/english/lesson-14-febrary';
import lesson2802 from 'src/app/data/sections/english/lesson-2802';
import march from 'src/app/data/sections/english/march';
import timeConditions from 'src/app/data/sections/english/time-conditions';
import work from 'src/app/data/sections/english/work';

import { Section } from 'src/app/interfaces/section';

export const English: Section = {
  name: 'Английский',
  categories: [
    introductoryWords,
    lesson14Febrary,
    lesson2802,
    lesson0103,
    timeConditions,
    lesson0603,
    march,
    april,
    guiltyWords,
    angularUpdateArticles,
    work
  ],
};
