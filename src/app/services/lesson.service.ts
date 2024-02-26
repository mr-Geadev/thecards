import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shuffleArray } from 'src/app/helpers/shuffle';
import { Card } from 'src/app/interfaces/card.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { DataService } from 'src/app/services/data.service';

const learnedQuestionKey = 'learned-answers';
const splitter = '/nextQuestion/;'

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  lesson = new BehaviorSubject<Card[] | null>(null);

  constructor(private dataService: DataService) {}

  private get learnedQuestions(): string[] {
    const savedValue = localStorage.getItem(learnedQuestionKey);
    return savedValue ? savedValue.split(splitter) : [];
  }

  startLesson(category?: Category) {
    const learnedQuestions = this.learnedQuestions;
    const cards = category ? category.cards : this.dataService.allCardsInCurrentSection;
    const unknownCards = cards.filter((card) => !learnedQuestions.some(question => {
      return question === card.question
    }))

    if (unknownCards.length === 0) {
      alert('Тут все выучено');
      return;
    }

    const shuffledUnknownCards = shuffleArray( unknownCards);
    this.lesson.next(shuffledUnknownCards);
  }

  endLesson() {
    this.lesson.next(null);
  }

  markAsLearned(question: string) {
    const learned = this.learnedQuestions;
    learned.push(question);
    localStorage.setItem(learnedQuestionKey, learned.join(splitter))
  }
}
