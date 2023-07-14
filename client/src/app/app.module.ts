import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './components/movies/movies.component';
import { AppComponent } from './components/app/app.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

@NgModule({
  declarations: [
    RootComponent,
    MoviesComponent,
    AppComponent,
    PageNotFoundComponentComponent,
    PhotosComponent,
    VideoplayerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
