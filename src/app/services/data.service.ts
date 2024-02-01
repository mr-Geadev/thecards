import { computed, Injectable, signal } from '@angular/core';
import { DATA } from 'src/app/data/data';

const SELECTED_SECTION_KEY = 'selected-section';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private get sectionKeyByDefault() {
    return Object.keys(DATA)[0];
  }

  public currentSectionKey = signal(this.getSectionKey());

  public currentSection = computed(
    () => DATA[this.currentSectionKey()]
  )

  get sectionsNameList() {
    return Object.entries(DATA).map(([key, section]) => {
      return {
        sectionKey: key,
        sectionName: section.name,
      }
    })
  }

  constructor() {}

  setSectionKey(sectionKey: string) {
    localStorage.setItem(SELECTED_SECTION_KEY, sectionKey);
    this.currentSectionKey.set(sectionKey);
  }

  getSectionKey() {
    const savedValue = localStorage.getItem(SELECTED_SECTION_KEY);
    return savedValue || this.sectionKeyByDefault;
  }
}
