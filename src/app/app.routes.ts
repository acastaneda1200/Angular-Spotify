import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';

import { SearchComponent } from './components/search/search.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full' , redirectTo: 'home' },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
