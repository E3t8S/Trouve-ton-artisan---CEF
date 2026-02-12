import { Component } from '@angular/core';
import { Header } from "../../composant/header/header";
import { Footer } from "../../composant/footer/footer";

@Component({
  selector: 'app-accueil',
  imports: [Header, Footer],
  template: `
    <app-header/>
    <app-footer/>
  `,
  styles: ''
})
export class Accueil {

}
