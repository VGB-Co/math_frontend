import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'token'
    })
};
 
@Injectable()
export class RestClient {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getTopListFor(level) {
        return this.http.get('https://www.mocky.io/v2/5bc244243100004e001fca81');
    }

    getTasksFor(difficulty) {
        console.log('Get tasks from database');
        return this.http.get('http://levivig.design:8000/api/tasks?difficulty=' + String(difficulty));
    }

    loginUser(name:string, password:string){
        console.log('Login checked');
        return this.http.post('http://levivig.design:8000/api/login?username=' + String(name) + '&password=' + String(password), null);
    }
}