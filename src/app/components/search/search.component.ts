import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  artist: any[] = []

  loading: boolean = false;

  constructor( private spotify: SpotifyService) {
   }

  search(termino: string) {
    this.loading = true
    console.log(termino)
    this.spotify.getArtists(termino)
    .subscribe((data: any) => {
      console.log(data)
      this.artist = data
      this.loading = false
    })
  }

}
