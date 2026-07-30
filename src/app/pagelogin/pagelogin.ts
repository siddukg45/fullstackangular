import { Component } from '@angular/core';
// import { Login } from '../../service/login';
import { Router } from '@angular/router';
// import { UserLogin } from '../../../interfaces/logindto';
import { FormsModule } from '@angular/forms';
import { Login } from '../service/login';
import { UserLogin } from '../../interfaces/logindto';

@Component({
  selector: 'app-pagelogin',
  imports: [FormsModule],
  templateUrl: './pagelogin.html',
  styleUrl: './pagelogin.css',
})
export class Pagelogin {
  userdto : UserLogin =
  {
     id: 0,
    email : '',
    password : '',
   
  }

  constructor(private service : Login ,private router : Router){}

  checkUser()
  {
    console.log("clicked")
    
    this.service.loginUser(this.userdto).subscribe({
          next:(res : any)=>{
               localStorage.setItem("personId", res.id.toString());
               console.log("personid form login",localStorage.getItem("personId"));

    localStorage.setItem("userId", res.id.toString());
      console.log("id is"+res.id);

      alert("Login Success");
    
      this.router.navigate(['/home']);
    },

 error:(err : any)=>{
   console.log("FULL ERROR", err);
   console.log("SERVER ERROR", err.error);

   alert(err.error);
}
    });
  }


}
