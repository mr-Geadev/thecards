import { Component } from '@angular/core';
import { DICTIONARY } from 'src/app/dictionary';
import { Category } from 'src/app/interfaces/category.interface';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-select-category',
  templateUrl: 'select-category.component.html',
  styleUrls: ['select-category.component.scss'],
})
export class SelectCategoryComponent {
  categories = DICTIONARY.categories

  constructor(
    private lessonService: LessonService,
  ) {}

  startLesson(category: Category) {
    this.lessonService.startLesson(category);
  }
}
