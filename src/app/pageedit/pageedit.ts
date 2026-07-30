import { ChangeDetectorRef, Component } from '@angular/core';
import { Edit } from '../service/edit';
import { ActivatedRoute, Router } from '@angular/router';
import { Igettodo } from '../../interfaces/igetdo';
import { FormsModule } from '@angular/forms';
import { Updateedit } from '../service/updateedit';
import { EditTodo } from '../../interfaces/edittodo';

@Component({
  selector: 'app-pageedit',
  imports: [FormsModule],
  templateUrl: './pageedit.html',
  styleUrl: './pageedit.css',
})
export class Pageedit {
  useredit: EditTodo = {
    id: 0,
    title: '',
    description: '',
    duedate:'',
    status:"Pending"
  }
  constructor(private service: Edit, private router: Router, private route: ActivatedRoute,private cd:ChangeDetectorRef,private ser:Updateedit) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      const perId = Number(localStorage.getItem("personId"));
    console.log("Editing ID:", id);
    this.perEdit(id),
    this.updtodo()
  }

  
  perEdit(id: number) {
    //  const perid = Number(localStorage.getItem("tokenid"));
    this.service.loadedit(id).subscribe({
      next: (res: EditTodo) => {
        this.useredit = res;
           console.log("Before",this.useredit.duedate);
         this.useredit.duedate = res.duedate.split('T')[0];
        console.log(this.useredit.duedate)
   
    // this.useredit.duedate = new Date(res.duedate)
    //   .toISOString()
    //   .split('T')[0];
    //     console.log(this.useredit.duedate);
        this.cd.detectChanges();
      },

      error: (err) => {
        console.log(err);
      }
      


    });



  }
  discard(){
   const personId = localStorage.getItem("personId");
     this.router.navigate(["/Pagegettodo",personId])
     alert("Discarded successfully")
  }
  updtodo()
  {
    console.log("update clicked");
   console.log("Before",this.useredit.duedate);
    this.ser.updateTodo(this.useredit).subscribe({
      next:(res)=>{
        console.log("After",this.useredit.duedate);
        alert("Updated Successfully");

        this.router.navigate(["/Pagegettodo",this.useredit.id]);
      },
      
  error: (err) => {
      console.log(err);
    }

    });
  }
}

