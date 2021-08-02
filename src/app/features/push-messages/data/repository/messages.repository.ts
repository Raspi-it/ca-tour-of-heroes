import { Injectable } from "@angular/core";
import { AbstractMessagesDataSource } from "../data-source/abstract.messages.data.source";
import { AbstractMessagesRepository } from "./abstract.messages.repository";
@Injectable()
export class MessagesRepository extends AbstractMessagesRepository {
    constructor(private readonly dataSource: AbstractMessagesDataSource){
        super();
    }

    async pushMessages(param): Promise<string[]> {
        try {
            const raw = await this.dataSource.pushMessages(param);
            console.log(raw);
            return raw;
        } catch (error) {
            console.error(error);
        } return [];
    }
}