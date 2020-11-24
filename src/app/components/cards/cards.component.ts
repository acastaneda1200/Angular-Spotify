import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  @Input() items:any[] = [];
  constructor(private router: Router) { }
 
  verArtista (item: any){
    let artistaID: string; 

    if (item.type=="artist"){
      artistaID = item.id;
    }else{
      artistaID = item.artists[0].id;
    }
    
     this.router.navigate(['/artist', artistaID]);
    
    
  }
 

}
