import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  constructor(private httpClient: HttpClient) {}
  hash = '571886aad725244bbeca289e85fab6ae';
  baseUrl =
    'https://gateway.marvel.com:443/v1/public/characters?ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=' +
    this.hash;

  allCharacters(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  allComics(): Observable<any> {
    const comicUrl =
      'https://gateway.marvel.com:443/v1/public/comics?ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=' +
      this.hash;
    return this.httpClient.get(comicUrl);
  }

  allSeries(): Observable<any> {
    const seriesUrl =
      'https://gateway.marvel.com:443/v1/public/series?ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=' +
      this.hash;
    return this.httpClient.get(seriesUrl);
  }

  getComicsByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl =
      `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=` +
      this.hash;
    return this.httpClient.get(comicByCharacterUrl);
  }

  getSeriesByCharacter(characterId: string): Observable<any> {
    const seriesByCharacterUrl =
      `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=` +
      this.hash;
    return this.httpClient.get(seriesByCharacterUrl);
  }

  getCharacterByName(characterName: string): Observable<any> {
    const characterByNameUrl =
      `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=100&apikey=7b444882e98a11432553b4ce3ff86348&hash=` +
      this.hash;
    return this.httpClient.get(characterByNameUrl);
  }
}
