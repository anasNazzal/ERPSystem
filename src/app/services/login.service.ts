import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    users: any = {
        "admin": "123456",
        "user": "123456"
    }

    constructor(private httpClient: HttpClient) { }

    getTestStatus(user: User): Observable<any> {
        if(user.userCode == "admin") {
            return this.httpClient.get('../../assets/test-data-all.json');
        } else {
            return this.httpClient.get('../../assets/test-data-limited.json');
        }
    }



}
