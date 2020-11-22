import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { 

    
  }
  
  buscarArtista(txtBuscar: string){
    this.spotify.buscarArtista(txtBuscar)
    .subscribe((data: any) =>{
      console.log(data);
      
      this.artistas = data.artists.items;
    })
  }
  
  ngOnInit(): void {
  }

}
