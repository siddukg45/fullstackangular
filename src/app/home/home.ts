import { Component, signal } from '@angular/core';
// import { Pageprofile } from '../../service/pageprofile';
// import { Profilee } from '../../../interfaces/profilee';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { Profilee } from '../../../interfaces/profile';
import { FormsModule } from '@angular/forms';
// import { Profilee } from '../../interfaces/profile';
// import { Pageprofile } from '../service/pageprofile';

@Component({
    selector: 'app-profile',
    imports: [FormsModule, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.css',
})

export class Home {
    constructor(private router: Router, private route: ActivatedRoute) { }

 
    loadtodo() {
        console.log("button clickedddd")
        const personId = localStorage.getItem("personId");
        console.log("personId from localStorage:", personId);
         
        const perid = Number(personId);
        console.log("Converted personId:", perid);

        this.router.navigate(["/Pagegettodo", perid]);
    }
       logout() {
        this.router.navigate(["/pagelogin"])
    }
    loadProfile() {
        const id = localStorage.getItem("userId");
        this.router.navigate(['/profile', id]);
    }

    navtodo() {
        console.log("Button clicked");

        const id = localStorage.getItem("userId");
        console.log("ID:", id);

        this.router.navigate(['/todo']);
    }

    isstudent = signal<boolean>(true);

    changestatus(value : boolean)
    {
        this.isstudent.set(value);
    }



}



