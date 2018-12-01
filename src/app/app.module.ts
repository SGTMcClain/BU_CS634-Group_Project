import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { MusicComponent } from './music/music.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MerchComponent } from './merch/merch.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    MusicComponent,
    PhotoGalleryComponent,
    MerchComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    LyricsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
