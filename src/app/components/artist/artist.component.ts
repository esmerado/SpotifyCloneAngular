import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = []

  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true
    this.router.params.subscribe( params => {
      this.getArtist(params['id'])
      this.getTopTrucks(params['id'])

    })
   }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.loading = true
    this.spotify.getArtist( id ).subscribe(artist => {
      this.artist = artist
      this.loading = false
    })
  }

  getTopTrucks(id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(topTrucks => {
      this.topTracks = topTrucks
      console.log(topTrucks)
    })
  }

}
