import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { PlayersComponent } from './players/players.component';
import { platformCoreDynamic } from '@angular/platform-browser-dynamic/src/platform_core_dynamic';
import { FooterComponent } from './footer/footer.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AdminConcertInfoComponent } from './admin-concert-info/admin-concert-info.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminSongEmbedComponent } from './admin-song-embed/admin-song-embed.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';

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
    HomeComponent,
    ErrorPage404Component,
    PlayersComponent,
    FooterComponent,
    AlbumDetailsComponent,
    AdminConcertInfoComponent,
    AdminGalleryComponent,
    AdminSongEmbedComponent,
    AdminComponent,
    AdminNavComponent,
    AdminBlogComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

