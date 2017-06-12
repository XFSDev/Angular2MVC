import { Component, ViewChild, ElementRef } from '@angular/core';
import { RestCalls } from "../service/RestCalls";


@Component({
    selector: 'dashboard',
    templateUrl: 'app/main/dashboard.component.html',
    providers: [RestCalls]
})
export class DashboardComponent {

    constructor(public restCalls: RestCalls) {
    }

    

}
