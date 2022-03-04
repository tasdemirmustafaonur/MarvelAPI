import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css'],
})
export class AllCharactersComponent implements OnInit {
  constructor(private service: MarvelAPIService) {}

  allCharacters: any[];
  comics: any[];
  series: any[];
  searchedCharacter: any[];
  characterName: string;
  showSearchResult: boolean;
  showComicsDiv: boolean;
  showSeriesDiv: boolean;

  ngOnInit(): void {
    this.showSearchResult = false;
    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.service.allCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;
    });
  }

  findCharacter(event: any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.getCharacterByName(this.characterName).subscribe((result) => {
      console.log(result);
      if (result.data.count > 0) {
        this.showSearchResult = true;
        this.searchedCharacter = result.data.results;
      } else {
        this.ngOnInit();
      }
    });
  }

  fetchComicsByCharacter(characterId: string) {
    this.service.getComicsByCharacter(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        console.log(result.data.results);

        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    });
  }

  fetchSeriesByCharacter(characterId: string) {
    this.service.getSeriesByCharacter(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        console.log(result.data.results);

        this.series = result.data.results;
        this.showSeriesDiv = true;
      }
    });
  }
}
