import { Injectable } from "@angular/core";
import { AbstractCustomError, ServerError } from "src/app/core/errors";
import { AbstractMessagesDataSource } from "../data-source/abstract.messages.data.source";
import { AbstractMessagesRepository } from "./abstract.messages.repository";
@Injectable()
export class MessagesRepository extends AbstractMessagesRepository {
    constructor(private readonly dataSource: AbstractMessagesDataSource){
        super();
    }

    async pushMessages(param): Promise<void | AbstractCustomError> {
        try {
            return this.dataSource.pushMessages(param);
        } catch (error) {
            console.error(error);
            return new ServerError(error?.error?.message);
        }
    }
}