import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractMessagesDataSource } from "./abstract.messages.data.source";

@Injectable()
export class MessagesDataSource extends AbstractMessagesDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async pushMessages(param): Promise<void | AbstractCustomError> {
        await this.http.post('http://localhost:8080/api/messages/add', {msg: param}).pipe().toPromise();
    }
}