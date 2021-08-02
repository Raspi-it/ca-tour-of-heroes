import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractMessagesDataSource } from "./abstract.messages.data.source";

@Injectable()
export class MessagesDataSource extends AbstractMessagesDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async pushMessages(param): Promise<string[]> {
        return this.http.request<string[]>('http://localhost:8080/api/messages/add', param).pipe().toPromise();
    }
}