import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MusicComponent } from './music/music.component';
import { MerchComponent } from './merch/merch.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'events', component: EventsComponent},
  {path: 'lyrics', component: LyricsComponent},
  {path: 'merch', component: MerchComponent},
  {path: 'music', component: MusicComponent},
  {path: 'photo-gallery', component: PhotoGalleryComponent},
  {path: 'error-page404', component: ErrorPage404Component},
  {path: '**', redirectTo: 'error-page404', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
