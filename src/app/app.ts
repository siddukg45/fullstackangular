import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './service/register';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   user : regdto ={
//    id: '',
//    name: '',
//    email: '',
//    phoneNumber: 0,
//    password: '',
//    age :0
//   }
//   protected readonly title = signal('FullStack');

//   constructor(private service : Register){}

//   register()
//   {
//     this.service.saveUser(this.user).subscribe({
//     next:(res)=>{
//       console.log(res);
//       alert("Registration Successful");
//     },

//  error:(err)=>{
//    console.log("FULL ERROR", err);
//    console.log("SERVER ERROR", err.error);

//    alert(err.error);
// }
// });
  }

