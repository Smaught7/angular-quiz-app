import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { QuestionComponent } from './category-selection/question/question.component';
import { ResultComponent } from './category-selection/question/result/result.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectionComponent,
    QuestionComponent,
    ResultComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
