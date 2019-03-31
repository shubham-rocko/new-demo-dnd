import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ApiIntegrationService {

    constructor(private http: HttpClient) { }

    // http functions
    public createTask(body){
        return this.http.post('task/create', body)
        .map((response) => {
            return response['result'];
        })
    }

    public getTaskList(){
        return this.http.get('task')
        .map((response) => {
            return response['result'];
        })
    }

    public updateTaskStatus(body){
        return this.http.put(`task/${body.taskId}/status`, body)
            .map((response) => {
                return response['result'];
            })
    }

    public createNewAccount(body){
        return this.http.post(`account/create`, body)
            .map((response) => {
                return response['result']
            });
    }

    public getActiveAccountList(){
        return this.http.get(`account`)
            .map((response) => {
                return response['result'];
            })
    }

    public getShortedAccountList(){
        return this.http.get(`account?short=true`)
            .map((response) => {
                return response['result'];
            })
    }

    public createNewContact(body){
        return this.http.post(`contact/create`, body)
            .map((response) => {
                return response['result']
            });
    }

    public getActiveContactList(){
        return this.http.get(`contact`)
            .map((response) => {
                return response['result'];
            })
    }

}
