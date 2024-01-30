import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from 'src/app/components/card/card.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { LessonComponent } from 'src/app/layouts/lesson/lesson.component';
import { SelectCategoryComponent } from 'src/app/layouts/select-category/select-category.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CategoryComponent,
    SelectCategoryComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
