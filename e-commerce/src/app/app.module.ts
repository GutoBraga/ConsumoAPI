import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { CaroselComponent } from './carosel/carosel.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    CaroselComponent,
    FooterMainComponent,
    MenuCategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
