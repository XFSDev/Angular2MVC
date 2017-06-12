"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RestCalls_1 = require("../service/RestCalls");
var HomeComponent = (function () {
    function HomeComponent(restCalls) {
        this.restCalls = restCalls;
        this.user = {};
    }
    HomeComponent.prototype.login = function () {
        console.log(this.user);
        this.restCalls.authorize(this.user.username, this.user.password)
            .subscribe(function (result) {
            console.log(result);
            if (result.response === "True") {
                window.location.href = window.location.origin + "/main";
            }
            else {
                alert("Invalid Creds");
            }
            //this.router.navigate(['/signup']);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/home/home.component.html',
        providers: [RestCalls_1.RestCalls]
    }),
    __metadata("design:paramtypes", [RestCalls_1.RestCalls])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map