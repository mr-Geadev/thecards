import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lesson = this.lessonService.lesson

  constructor(private lessonService: LessonService) {

  }

}
