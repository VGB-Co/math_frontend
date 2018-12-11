import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class RestClient {
 
    constructor(private http: HttpClient) {}

    private baseURL = 'https://levivig.design:8000/api';
 
    getTopListFor(level) {
        console.log('Get toplist from database');
        console.log(localStorage.getItem('activeToken'));
        var httpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization': 'token ' + localStorage.getItem('activeToken'),
            })
        };
        return this.http.get(this.baseURL + '/toplist?difficulty=' + String(level), httpOptions)
                        .catch((error)=>{
                            console.log('Error while getting the toplist');
                            return Observable.throw(error);
        });
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
        return this.http.get(this.baseURL + '/tasks?difficulty=' + String(difficulty), httpOptions)
                        .catch((error)=>{
                            console.log('Error while getting the tasks');
                            return Observable.throw(error);
        });
    }

    loginUser(name:string, password:string){
        console.log('Login checked');
        const data = {'username': name, 'password': password};
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseURL + '/login', data, httpOptions)
                        .catch((error)=>{
                            console.log('Error while user log in');
                            return Observable.throw(error);
        });
    }

    registerUser(name: String, password: String, email: String) {
        console.log('Register checked');
        const data = {'username': name, 'password': password, 'email': email};
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseURL + '/register', data, httpOptions)
                        .catch((error)=>{
                        console.log('Error while user registration');
                        return Observable.throw(error);
        });
    }

    loggedIn(){
        return !!localStorage.getItem('activeToken');
    }

    postResult(difficulty, correct_answer: Number, time: Number) {
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'token ' + localStorage.getItem('activeToken'),
                'Content-Type': 'application/json'
            })
        };
        const data = {'correct_answer': correct_answer,'time': time};
        console.log('results( :correct answers = ' + correct_answer + ' time = ' + time + 'sec) was post to database');
        return this.http.post(this.baseURL + '/results?difficulty=' + String(difficulty), data, httpOptions)
                        .catch((error)=>{
                        console.log('Error while result posting');
                        return Observable.throw(error);
        });
    }

}