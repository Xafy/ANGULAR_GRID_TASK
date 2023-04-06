import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private url = 'http://jsonplaceholder.typicode.com/posts';
        
    constructor(private httpClient: HttpClient) { }

    getData(): Observable<any>{
        return this.httpClient.get(this.url)
    }
}