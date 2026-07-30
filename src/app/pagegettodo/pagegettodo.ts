import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Gettodo } from '../service/gettodo';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Igettodo } from '../../interfaces/igetdo';
import { Router } from '@angular/router';
import { Updateedit } from '../service/updateedit';
import { EditTodo } from '../../interfaces/edittodo';


@Component({
  selector: 'app-pagegettodo',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './pagegettodo.html',
  styleUrl: './pagegettodo.css',
})
export class Pagegettodo implements OnInit {

  doo: Igettodo[] = [
    {
      title:'',
      description:'',
      duedate:'',
      status:"Pending",
      remainingDays :''
    }
  ];
   show = false;
  constructor(
    private service: Gettodo,
    private route: ActivatedRoute,
    private router:Router,
    private cd:ChangeDetectorRef,
    private ser : Updateedit
  ) {}

  ngOnInit() {
    this.loadtodo();   
  }
   Changestat(todo : EditTodo){
    todo.status="In Progress"
    console.log(todo);

    this.ser.updateTodo(todo).subscribe({
      next:(res:EditTodo)=>{
        console.log(res.status);
         alert("Task Started");
        
      }

    });
    //   alert("Task Started");

    // });
  
   }

   MarkCompleted(todo : Igettodo)
   {
    todo.status="Completed";

    this.ser.updateTodo(todo).subscribe(()=>{
      alert("Task is completed");
    });
   }
  
   daysleft(todo : Igettodo){
    this.show=true;
    const today = new Date();
    const due = new Date(todo.duedate);

    today.setHours(0,0,0,0);
    due.setHours(0,0,0,0);

    const diff = Math.ceil((due.getTime() -  today.getTime()) / (1000 * 60 * 60 * 24)  );

    if(diff < 0)
    {
      return `${Math.abs(diff)} day${Math.abs(diff) > 1 ? 's' : ''} overdue`;
    }
    if(diff == 0)
    {
      return "Due Today";
    }
    return `${diff} day${diff > 1 ? 's' : ''} left `;
   }
  
  navEdit(id:number){
    //  const id = Number(localStorage.getItem("personId"));
    this.router.navigate(["/pageedit",id])
  }

  navdelete(id : number)
  {
    this.router.navigate(["/pagedelete",id])
  }
  back()
  {
    console.log("homeclicked");
   this.router.navigate(['/home']);
  }
  loadtodo() {
    
    const perid = Number(localStorage.getItem("personId"));
    console.log(perid);

    this.service.gettodo(perid).subscribe({
      next: (res: Igettodo[]) => {
       
        this.doo=res;
    if (res.length === 0) {
      console.log('No todos found');
    }

         this.cd.detectChanges();
        console.log("DATA:", this.doo);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

 
}