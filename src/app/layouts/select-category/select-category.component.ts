import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.interface';
import { DataService } from 'src/app/services/data.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-select-category',
  templateUrl: 'select-category.component.html',
  styleUrls: ['select-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCategoryComponent {
  categories = computed(() => this.dataService.currentSection().categories);
  sectionList = this.dataService.sectionsNameList;

  selectedSection = new FormControl<string>(this.dataService.currentSectionKey());

  constructor(
    private dataService: DataService,
    private lessonService: LessonService,
  ) {}

  startLesson(category?: Category) {
    this.lessonService.startLesson(category);
  }

  onChangeSection() {
    this.dataService.setSectionKey(this.selectedSection.value!);
  }
}
