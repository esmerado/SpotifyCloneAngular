import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [],
})
export class CardsComponent implements OnInit {
  @Input() songs: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showArtist(item: any) {
    let artistId;
    let albumId;

    console.log(item)

    if(item.type === 'artist') {
      artistId = item.id
      console.log(item.id)
      this.router.navigate(['/artist', artistId])
    }else {
      albumId = item.id
      console.log(item.id)
      this.router.navigate(['/album', artistId])
    }

  }
}
