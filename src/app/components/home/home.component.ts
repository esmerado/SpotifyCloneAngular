import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  loading: boolean;
  error : boolean;
  messageError: string = '';

  constructor( private spotify: SpotifyService) {
    this.loading = true
    this.error = false
  }

  ngOnInit(): void {
    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      console.log(data);
      this.newSongs = data
      this.loading = false
    }, (errorService) => {
      this.loading = false
      this.error = true
      this.messageError = errorService.error.error.message
    } );
  }
}
