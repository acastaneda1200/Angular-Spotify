import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  constructor(private http: HttpClient) {
    console.log('READY SERVICE');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBnGtkxwHWx8pciVMQukQDLZFn7AazQa6i-S_oIOccbBRTBYpBbp9nQzpRN81mYfnHzg02dteCPPpFY9g'
    })

    return  this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
     
  }

  buscarArtista(txtbuscar) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBnGtkxwHWx8pciVMQukQDLZFn7AazQa6i-S_oIOccbBRTBYpBbp9nQzpRN81mYfnHzg02dteCPPpFY9g'
    })
    
    return  this.http.get(`https://api.spotify.com/v1/search?q=${txtbuscar}&type=artist%2Ctrack&limit=15`, {headers});
     
  }

}
