import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RestClient {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getTopListFor(level) {
        //TODO: use level parameter in http get
        return this.http.get('https://www.mocky.io/v2/5bc244243100004e001fca81');
    }

    getTasksFor(difficulty) {
        return this.http.get('http://18.220.101.207:8000/api/tasks');
    }
}