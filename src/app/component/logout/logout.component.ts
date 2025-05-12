import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private route:Router) {
    
  }
  onLogOut()
  {
   console.log("inside Logout");
   
     
       this.route.navigate(['']);
           Swal.fire({
             title:"Done",
             text:"LogOut Successfully!",
             icon:"success",
           });
  
  }
}
