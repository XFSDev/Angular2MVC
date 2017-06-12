import { Component } from '@angular/core';
import { RestCalls } from "../service/RestCalls";


@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  providers: [RestCalls]
})
export class LoginComponent {
    user: any = {};

    constructor(public restCalls: RestCalls) {
        
    }

    login() {
        console.log(this.user);
        this.restCalls.authorize(this.user.username, this.user.password)
            .subscribe((result: any) => {
                console.log(result);
                if (result.response === "True") {
                    window.location.href = window.location.origin + "/main";
                } else {
                    alert("Invalid Creds");
                }
                
                //this.router.navigate(['/signup']);
            }
            );
    }

}
