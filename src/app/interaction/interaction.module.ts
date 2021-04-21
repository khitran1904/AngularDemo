import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { InteractionComponent } from './interaction.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [MovieListComponent, MovieItemComponent, InteractionComponent, AddMovieComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[InteractionComponent]
})
export class InteractionModule { }
