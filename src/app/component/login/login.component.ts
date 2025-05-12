import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import Swal from 'sweetalert2';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiData: any[] = [];
  reqdata: any;
  constructor(private serviceService: ServiceService, private route: Router) {

  }
  user = {

    username: '',
    password: ''

  }
  onLogin() {
    // this.formserviceservice.getApiData(this.user).subscribe(data=>{
    //   console.log(data)
    // })
    console.log(this.user);

    this.serviceService.getApiData(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.reqdata = data;

        if (data.response === "This is valid user") {
          console.log("inside if");
          this.route.navigate(['']);
          Swal.fire({
            title: "Submitted",
            text: "Valid user",
            icon: "success",
          });
        } else {
          console.log("Inside else");
          Swal.fire({
            title: "Wrong password",
            text: "Not a valid user",
            icon: "error",
          });
        }
      },
      (error: any) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Wrong password",
          text: "Not a valid user",
          icon: "error",
        });
      }
    );
  }
}
