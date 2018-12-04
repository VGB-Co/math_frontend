import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable()
export class RestClient {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getTopListFor(level) {
        return this.http.get('https://www.mocky.io/v2/5bc244243100004e001fca81');
    }

    getTasksFor(difficulty) {
        console.log('Get tasks from database');
        console.log(localStorage.getItem('activeToken'));
        var httpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization': 'token ' + localStorage.getItem('activeToken'),
            })
        };
        return this.http.get('http://levivig.design:8000/api/tasks?difficulty=' + String(difficulty), httpOptions);
    }

    loginUser(name:string, password:string){
        console.log('Login checked');
        return this.http.post('http://levivig.design:8000/api/login?username=' + String(name) + '&password=' + String(password), null);
    }

    registerUser(name: String, password: String, email: String) {
        console.log('Register checked');
        return this.http.post('http://levivig.design:8000/api/register?username=' + name + '&password=' + password + '&email=' + email, null);
    }

    loggedIn(){
        return !!localStorage.getItem('activeToken');
    }

}