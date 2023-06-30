import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './question/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectionComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
