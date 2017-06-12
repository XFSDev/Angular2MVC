"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var main_component_1 = require("./main.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var routes = [
    //{ path: 'students', pathMatch: 'full', component: StudentComponent },
    //{ path: 'labs', pathMatch: 'full', component: LabComponent },
    //{ path: 'equipments', pathMatch: 'full', component: EquipmentComponent },
    //{ path: 'schedule', pathMatch: 'full', component: ScheduleComponent },
    { path: 'main', pathMatch: 'full', component: dashboard_component_1.DashboardComponent },
    //{ path: 'labusage', pathMatch: 'full', component: LabUsageComponent },
    //{ path: 'equipmentusage', pathMatch: 'full', component: EquipmentUsageComponent },
    //{ path: 'billing', pathMatch: 'full', component: BillingComponent },
    { path: 'main', redirectTo: 'main', pathMatch: 'full' }
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [main_component_1.MainComponent, dashboard_component_1.DashboardComponent],
        bootstrap: [main_component_1.MainComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map