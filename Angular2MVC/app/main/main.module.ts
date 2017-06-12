import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { FormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardComponent} from './dashboard.component'

const routes: Routes = [
    //{ path: 'students', pathMatch: 'full', component: StudentComponent },
    //{ path: 'labs', pathMatch: 'full', component: LabComponent },
    //{ path: 'equipments', pathMatch: 'full', component: EquipmentComponent },
    //{ path: 'schedule', pathMatch: 'full', component: ScheduleComponent },
    { path: 'main', pathMatch: 'full', component: DashboardComponent },
    //{ path: 'labusage', pathMatch: 'full', component: LabUsageComponent },
    //{ path: 'equipmentusage', pathMatch: 'full', component: EquipmentUsageComponent },
    //{ path: 'billing', pathMatch: 'full', component: BillingComponent },
    { path: 'main', redirectTo: 'main', pathMatch: 'full' }
];


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
  declarations: [ MainComponent,DashboardComponent],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
