import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { AppComponent } from './components/app/app.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { PhotosComponent } from './components/photos/photos.component';

export const RoutePaths = {
  Movies: 'movies',
  Photos: 'photos',
};

const routes: Routes = [
  {
    path: RoutePaths.Movies,
    component: MoviesComponent,
  },
  {
    path: RoutePaths.Photos,
    component: PhotosComponent,
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
