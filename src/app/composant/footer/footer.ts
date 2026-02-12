import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <section class="footer d-flex flex-column gap-4">
      <img src="assets/logo.png" class="img-fluid align-self-center" style="max-width: 300px;" alt="Trouve ton artisan">
      <p>
        <strong class="text-uppercase">Lyon</strong>
        <br>
        11 cours Charlemagne
        <br>
        CS 20033
        <br>
        69269 LYON CEDEX 02
        <br>
        France
        <br>
        <a href="tel:+33(0)426734000">0426734000</a>
      </p>
      <hr class="white-line">
      <section class="legal d-flex flex-row flex-wrap gap-3 justify-content-center align-self-md-center">
        <a href="#">Mentions légales</a>
        <a href="#">Données personnelles</a>
        <a href="#">Accessibilité</a>
        <a href="#">Contact</a>
        <a href="#">Politique des cookies</a>
        <a href="#">Gestion des cookies</a>
      </section>
    </section>
  `,
  styleUrls : ['./footer.scss'],
})
export class Footer {

}
