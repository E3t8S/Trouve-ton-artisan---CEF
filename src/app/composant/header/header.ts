import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar sticky-top navbar-light navbar-custom">
      <section class="container-fluid align-items-center">
        <a class="navbar-brand" routerLink="">
          <img src="assets/logo.png" alt="Logo" class="logo-navbar">
        </a>
        <section class="burger-zone d-flex align-items-center gap-2">
          <form class="position-relative">
            <input type="search" class="form-control form-control-sm pe-5 rounded-pill" placeholder="Rechercher">
            <button type="submit"
                    class="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent">
              <img src="assets/favicon/loupe.png" width="18" alt="rechercher">
            </button>
          </form>
          <button class="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight">
            <img src="assets/favicon/menu.png" alt="menu" width="30">
          </button>
        </section>
        <section class="desktop-menu flex-column ms-auto">
          <ul class="navbar-nav flex-row justify-content-end mb-2">
            <li class="nav-item" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">
              <a class="nav-link px-3" routerLink="/bâtiments">Bâtiments</a>
            </li>
            <li class="nav-item" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">
              <a class="nav-link px-3" routerLink="/services">Services</a>
            </li>
            <li class="nav-item" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">
              <a class="nav-link px-3" routerLink="/alimentation">Alimentation</a>
            </li>
            <li class="nav-item" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">
              <a class="nav-link px-3" routerLink="/fabrication">Fabrication</a>
            </li>
          </ul>
          <form class="position-relative align-self-center" style="max-width:400px;">
            <input type="search" class="form-control pe-5 rounded-pill" placeholder="Rechercher">
            <button type="submit"
                    class="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent">
              <img src="assets/favicon/loupe.png" width="20" alt="rechercher">
            </button>
          </form>
        </section>
      </section>
    </nav>
    <section class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
      <section class="offcanvas-header">
        <a class="offcanvas-title" routerLink="">
          <img src="assets/favicon/favicon.png" alt="Trouve ton artisan">
        </a>
        
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </section>
      <section class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item"><a class="nav-link" routerLink="#">Bâtiments</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="#">Alimentation</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="#">Fabrication</a></li>
        </ul>
      </section>
    </section>


  `,
   styleUrls: ['./header.scss'] ,
})
export class Header {
 
}
