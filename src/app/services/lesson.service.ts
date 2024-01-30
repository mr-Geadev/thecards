import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shuffleArray } from 'src/app/helpers/shuffle';
import { Card } from 'src/app/interfaces/card.interface';
import { Category } from 'src/app/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  lesson = new BehaviorSubject<Card[] | null>(null);

  startLesson(category: Category) {
    this.lesson.next(shuffleArray(category.cards));
  }

  endLesson() {
    this.lesson.next(null);
  }
}
