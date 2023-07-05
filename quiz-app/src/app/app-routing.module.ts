import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quiz-category',
    component: CategorySelectionComponent,
  },
  {
    path: 'quiz-category',
    component: CategorySelectionComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
