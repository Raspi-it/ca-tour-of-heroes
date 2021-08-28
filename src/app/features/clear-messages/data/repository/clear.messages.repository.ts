import { Injectable } from "@angular/core";
import { AbstractClearMessagesDataSource } from "../data-source/abstract.clear.messages.data.source";
import { AbstractClearMessagesRepository } from "./abstract.clear.messages.repository";
@Injectable()
export class ClearMessagesRepository extends AbstractClearMessagesRepository {
    constructor(private readonly dataSource: AbstractClearMessagesDataSource){
        super();
    }

    async clearMessages(): Promise<string[]> {
        try {
            const raw = await this.dataSource.clearMessages();
            return raw;
        } catch (error) {
            console.error(error);
        } return [];
    }
}