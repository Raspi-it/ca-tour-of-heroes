import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractGetMessagesDataSource } from "./abstract.get.messages.data.source";

@Injectable()
export class GetMessagesDataSource extends AbstractGetMessagesDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async getMessages(): Promise<string[]> {
        return this.http.get<any[]>('http://localhost:8080/api/messages/get').pipe(
            
        ).toPromise();
    }
}