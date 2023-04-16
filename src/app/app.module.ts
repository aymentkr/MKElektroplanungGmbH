import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import {NgbCarousel, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import { FrCarouselModule } from 'fr-carousel';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs/jobs.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { BeratungComponent } from './Service/beratung/beratung.component';
import { PlanungComponent } from './Service/planung/planung.component';
import { ProjektierungComponent } from './Service/projektierung/projektierung.component';
import { BauueberwachungComponent } from './Service/bauueberwachung/bauueberwachung.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'referenzen', component: ReferenzenComponent},
  { path: 'beratung', component: BeratungComponent },
  { path: 'planung', component: PlanungComponent },
  { path: 'projektierung', component: ProjektierungComponent },
  { path: 'bauüberwachung', component: BauueberwachungComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReferenzenComponent,
    JobsComponent,
    HomeComponent,
    BeratungComponent,
    PlanungComponent,
    ProjektierungComponent,
    BauueberwachungComponent,
  ],
  imports: [BrowserModule, NgbCarousel, FrCarouselModule, FormsModule, RouterLink, RouterModule.forRoot(appRoutes), NgOptimizedImage, NgbSlide],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
