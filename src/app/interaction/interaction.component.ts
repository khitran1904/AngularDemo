import { MovieListComponent } from './movie-list/movie-list.component';
import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  // Cách 1 : truyền input
  // newMovie:any;

  // Cách 2 : dùng ViewChild
  // @ViewChild("movieList") movieListComponent: MovieListComponent | undefined;
  // Do lần đầu chạy thì chưa render ra giao diện nên chưa co biến movieList
  @ViewChild("movieList") movieListComponent!: MovieListComponent;
  constructor() { }

  ngOnInit(): void {
  }

  handleAddMovie(movie:any){
    // Cách 1 : truyền input
    // this.newMovie=movie;
    this.movieListComponent.movieList.push(movie);
  }
  
}
