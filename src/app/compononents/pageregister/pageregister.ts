import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from '../../service/register';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-pageregister',
  imports: [FormsModule],
  templateUrl: './pageregister.html',
  styleUrl: './pageregister.css',
})
export class Pageregister {

   user : regdto ={
   id: 0,
   name: '',
   email: '',
   phoneNumber: 0,
   password: '',
   age :0
  }
  protected readonly title = signal('FullStack');

  constructor(private service : Register){}

  register()
  {
    this.service.saveUser(this.user).subscribe({
    next:(res)=>{
      console.log(res);
      alert("Registration Successful");
    },

 error:(err)=>{
   console.log("FULL ERROR", err);
   console.log("SERVER ERROR", err.error);

   alert(err.error);
}
});
  }
}
