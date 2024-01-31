import { Dictionary } from 'src/app/interfaces/dictionary.interface';

export const DICTIONARY: Dictionary = {
  categories: [
    {
      name: 'слова Вводные слова',
      cards: [
        {
          question: 'However',
          answer: 'Однако'
        },
        {
          question: 'So',
          answer: 'Также'
        }
      ]
    },

    {
      name: 'Глаголы',
      cards: [
        {
          question: 'See (непр)',
          answer: 'Смотреть. Saw, Seen'
        }
      ]
    },

    {
      name: 'Местоимения',
      cards: [
        {
          question: 'I',
          answer: 'Я'
        },
        {
          question: 'We',
          answer: 'Мы'
        },
        {
          question: 'You',
          answer: 'Ты, Вы'
        },
        {
          question: 'He',
          answer: 'Он'
        },
        {
          question: 'She',
          answer: 'Она'
        },
        {
          question: 'It',
          answer: 'Оно'
        },
        {
          question: 'They',
          answer: 'Они'
        }
      ]
    },
  ],
}
