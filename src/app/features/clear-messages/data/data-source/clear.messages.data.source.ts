import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractClearMessagesDataSource } from "./abstract.clear.messages.data.source";

@Injectable()
export class ClearMessagesDataSource extends AbstractClearMessagesDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async clearMessages(): Promise<string[]> {
        return this.http.get<any[]>('http://localhost:8080/api/messages/clear').pipe().toPromise();
    }
}