import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class APIService {
    constructor(private http: HttpClient) { }

    apiURL = 'http://localhost:4000/api';

    sendContact(data: Object) {
        return this.http.post(this.apiURL + '/contact/new', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            })
        });
    }
}
