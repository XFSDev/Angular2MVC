import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RestCalls {
    private authenticated: boolean = false;
    public username: string = null;
    private oRoleAndMenu: Object = null;
    private oRoleAndMenuObservable: Observable<any> = null;

    private oLabs: Object = null;
    private oLabsObservable: Observable<any> = null;
    private oLabBooking: Object = null;
    private oLabBookingObservable: Observable<any> = null;
    private oEquipments: Object = null;
    private oEquipmentsObservable: Observable<any> = null;

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(public http: Http) {
        let sUserEmail = localStorage.getItem('userEmail');
        if (sUserEmail) {
            this.username = sUserEmail;
        }
    }

    authorize(username: string, password: string) {
        console.log(username);
        console.log(password);
        return this.http.post('/validate', JSON.stringify({ Username: username, Password: password }), this.options)
            .map((response: Response) => {
                this.authenticated = true;
                let result: Object;
                result = JSON.parse((response as any)._body);
                return result;
            });
    }
}