import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  // để nhận dữ liệu từ component cha
  @Input() movie:any
  
  // EventEmitter : tạo 1 custom event
  // Output: đẩy event lên component cha
  @Output() onDelete = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  // Đẩy id của phim cần xóa lên cmp movie-list
  // emit event kèm data lên component cha
  handleDeleteMovie(){
    this.onDelete.emit(this.movie.id)
  }

}
