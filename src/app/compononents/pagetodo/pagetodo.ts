import { Component } from '@angular/core';
// import { ToDo } from '../../../interfaces/Itodo';
import { Router } from '@angular/router';
import { Todo } from '../../service/todo';
import { ToDo } from '../../../interfaces/Itodo';

import { ActivatedRoute, Route } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pagetodo',
  imports: [FormsModule],
  templateUrl: './pagetodo.html',
  styleUrl: './pagetodo.css',
})
export class Pagetodo {
  todo : ToDo = {
    title:'',
    description : '',
    duedate :new Date(),
    status:"Pending",
    personId : 0,
  }

  constructor(private service :  Todo ,private router:Router,private route:ActivatedRoute){}

savetodo() {
     const id = Number(localStorage.getItem("userId"));                  
   console.log("Person id"+id)
  this.todo.personId = id;
  
  console.log("Button clicked");

  console.log("Todo Object:", this.todo);

  this.service.AddTodo(this.todo).subscribe({
    next: (res) => {
      this.todo=res;
       console.log(res);
      //  localStorage.setItem("personId", res.personId.toString());

// console.log("Stored personId:", localStorage.getItem("personId"));
     
      alert("ToDo added succesully");
      this.router.navigate(["/home"]);
    },
    error: (err) => {
      console.log(err);
      console.log(err.error);
      console.log(err.error.errors);
    }
  });
}

  }

   



