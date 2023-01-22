import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FrCarouselModule } from 'fr-carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReferenzenComponent,
  ],
  imports: [BrowserModule, NgbCarousel, FrCarouselModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
