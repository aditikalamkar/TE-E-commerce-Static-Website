import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private serviceService : ServiceService,private route:Router) {
    
  }
  user = {
    username :'',
    email : '',
    password : '',
    phone : ''
   } 
   ngoninIt(){
    console.log(this.user);
    
   }
   onSignUp()
     {
      console.log("inside signup");
      
        this.serviceService.saveData(this.user).subscribe(data=>{
          console.log(data)
          this.route.navigate(['']);
              Swal.fire({
                title:"Submitted",
                text:"SignUp Completed Successfully!",
                icon:"success",
              });
        })
     }
}
