import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit,OnChanges {

  movieList:any[]=[
    {id:1,name:"name movie 1",price:8000, img:'assets/img/1.jpg'},
    {id:2,name:"name movie 2",price:3000, img:'assets/img/2.jpg'},
    {id:3,name:"name movie 3",price:6000, img:'assets/img/3.jpg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // Chạy khi input thay đổi
  ngOnChanges(changes:any):void{
    // Cách 1 : sử dụng truyền Input
    // console.log(changes);
    // const movie = changes.newMovie.currentValue;
    // // tránh trường hợp input khác thay đổi mà vẫn thêm phim mới vào
    // if(movie && changes.newMovie.currentValue?.id !== changes.newMovie.previousValue?.id){
    //   this.movieList.push(movie)
    // }
  }

  // @Input() newMovie:any;


  handleDeleteMovie(movieID:number){
    this.movieList = this.movieList.filter(
      movie=>movie.id!== movieID
    )
  }
}
