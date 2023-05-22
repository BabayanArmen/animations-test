import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopeComponent } from './pages/rope/rope.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { Rope2Component } from './pages/rope2/rope2.component';
import { CaruselComponent } from './pages/page3/carusel/carusel.component';
import { CaruselBlockComponent } from './pages/page3/carusel-block/carusel-block.component';
import { BannerCarouselComponent } from './pages/banner-carousel/banner-carousel.component';
import { RopeMobileComponent } from './pages/rope-mobile/rope-mobile.component';
import { RopeVerticalComponent } from './pages/rope-vertical/rope-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    RopeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NavbarComponent,
    Rope2Component,
    CaruselComponent,
    CaruselBlockComponent,
    BannerCarouselComponent,
    RopeMobileComponent,
    RopeVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
