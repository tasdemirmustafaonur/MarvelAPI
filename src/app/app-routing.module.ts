import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path: '', component: AllCharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
