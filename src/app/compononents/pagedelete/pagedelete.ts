import { ChangeDetectorRef, Component } from '@angular/core';
import { Delete } from '../../service/delete';
// import { Router } from 'express';
import { ActivatedRoute, Router } from '@angular/router';
import { Igettodo } from '../../../interfaces/igetdo';
import { FormsModule } from '@angular/forms';
import { Deletesuccess } from '../../service/deletesuccess';

@Component({
  selector: 'app-pagedelete',
  imports: [FormsModule],
  templateUrl: './pagedelete.html',
  styleUrl: './pagedelete.css',
})
export class Pagedelete {
  deltodo: Igettodo = {
    id: 0,
    title: '',
    description: '',
    duedate: '',
    status:"Pending",
    remainingDays:''
  }
  constructor(private service: Delete, private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef, private ser: Deletesuccess) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getdelete(id)

  }

  getdelete(id: number) {
    this.service.deletetodo(id).subscribe({
      next: (res: Igettodo) => {
        this.deltodo = res;
      this.deltodo.duedate=res.duedate.split('T')[0];
        this.cd.detectChanges();

      },

      error: (err) => {
        console.log(err);
      }
    })
  }
    delsucc() {
    this.ser.delsucc(this.deltodo).subscribe({
      next: (res: Igettodo) => {
              const personId = localStorage.getItem("personId");
        this.router.navigate(["/Pagegettodo", personId])
        alert("Deleted succesfully");
   
      }, error: (err) => {
        console.log(err);
      }


    });

  }
  discard() {
    const personId = localStorage.getItem("personId");
    this.router.navigate(["/Pagegettodo", personId])
    alert("Discarded successfully")
  }
  
}
