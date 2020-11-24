import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNCf-gRmvcpiG6ZBv0F0TrngU2S8TvwRMWUe6gdLMEBB0WUcQAoFDK28jRrYt0nsMLTRXbx1n5jTfU0vo'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {


    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}) 
  }

  buscarArtista(txtbuscar: string) {
    return this.getQuery(`search?q=${txtbuscar}&type=artist%2Ctrack`)
      .pipe(map(data => data['artists'].items));

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe( map ( data => data['artists'].items));

  }
  
  getTopTracksArtista(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map ( data => data['tracks']));

  }

 

}
