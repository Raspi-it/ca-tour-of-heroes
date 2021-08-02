import { Injectable } from "@angular/core";
import { AbstractGetMessagesDataSource } from "../data-source/abstract.get.messages.data.source";
import { AbstractGetMessagesRepository } from "./abstract.get.messages.repository";
@Injectable()
export class GetMessagesRepository extends AbstractGetMessagesRepository {
    constructor(private readonly dataSource: AbstractGetMessagesDataSource){
        super();
    }

    async getMessages(): Promise<string[]> {
        try {
            const raw = await this.dataSource.getMessages();
            console.log(raw);
            return raw;
        } catch (error) {
            console.error(error);
        } return [];
    }
}