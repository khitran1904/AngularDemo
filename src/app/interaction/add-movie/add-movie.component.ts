import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form:any = {
    name:"",
    price:"",
    img:""
  }
  constructor() { }

  @Output() onAdd = new EventEmitter();

  

  ngOnInit(): void {
  }

  handleAddMovie(){
    console.log(this.form)
    // đẩy dữ liệ thêm phim lên component Interaction
    const movie = {
      ...this.form,
      id:Math.floor(Math.random()*100)
    }
    this.onAdd.emit(movie);
  }
  handleSelectFile(evt:any)
  {
    // chỉ cần gửi file lên cho backend xử lí là đk
    // console.log(evt.target.files[0])
    const file = evt.target.files[0];

    // chuyển file thành base 64 để có thể sử dụng trong src của tag img

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = (evt) =>{
      this.form.img = evt.target?.result ?? "";
    }
  }

}
