import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { MarvelAPIService } from './services/marvel-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AllCharactersComponent,
    ComicsComponent,
    SeriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
