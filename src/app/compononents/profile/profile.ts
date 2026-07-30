import { ChangeDetectorRef, Component } from '@angular/core';
import { ProfileService } from '../../service/pageprofile';
import { email } from '@angular/forms/signals';
import { Info } from '../../../interfaces/profile';
import { ActivatedRoute } from '@angular/router';
// import { FormControl } from '@angular/forms';
// import { ProfileService } from '../../service/profile.service';

@Component({
     standalone: true,
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user!:Info;
  

  constructor(private service:ProfileService,private route : ActivatedRoute,private cd : ChangeDetectorRef){}

  ngOnInit()
  {
    const id =Number(this.route.snapshot.paramMap.get('id'));
      this.service.getProfile(id).subscribe({
          next:(res :  Info)=>
          {
            
              console.log(res);

              this.user = res
                   this.cd.detectChanges();
               
          },
          error:(err : any)=>
          {
              console.log(err);
          }
      })
  }
}