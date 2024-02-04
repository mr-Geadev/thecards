import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['lesson.component.scss']
})
export class LessonComponent {
  @Input() lesson!: Card[];

  currentCardIndex = 0;

  get currentCard(): Card {
    return this.lesson[this.currentCardIndex];
  }

  constructor(
    private lessonService: LessonService
  ) {}

  nextCard() {
    if (this.currentCardIndex === this.lesson.length - 1) {
      this.lessonService.endLesson();
      return;
    }

    this.currentCardIndex += 1;
  }

  markAsLearned(card: Card) {
    this.lessonService.markAsLearned(card.question);
    this.nextCard();
  }

}
