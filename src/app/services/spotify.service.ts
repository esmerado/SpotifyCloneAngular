import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, pipe } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDLzHmN6HEIp0BZWVnxdFIzbsQhZl8iHgz29lKIvRXZUDAH-cjJVdJrZG3hiXNJ8m9ESaD0sumTxJVrEI8',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data['albums'].items;
      })
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=e${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data['artists'].items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => {
        return data['tracks'];
      })
    );

  }
}
