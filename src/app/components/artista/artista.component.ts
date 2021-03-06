import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista:any = {};
  toptracks: any [] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) { 
                this.loading = true;
    this.router.params.subscribe( params =>{
     
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  getArtista (id: string){
    this.loading = true;
    this.spotify.getArtista(id).subscribe (artista => {
      this.loading = false;
      this.artista = artista;
      
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracksArtista(id ).subscribe( data =>{
      this.toptracks = data;
      console.log(this.toptracks);
      
      
    })
  }


  

  
}
