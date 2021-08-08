import { Injectable } from "@angular/core";
import { AbstractGetMessagesRepository } from "../../data/repository/abstract.get.messages.repository";
import { AbstractGetMessagesUseCase } from "./abstract.get.messages.use.case";

@Injectable()
export class GetMessagesUseCase extends AbstractGetMessagesUseCase {
    constructor(private readonly repository: AbstractGetMessagesRepository) {
        super();
    }

    async execute(): Promise<string[]> {
        console.log('GetMessagesUseCase');
        return this.repository.getMessages();
    }
}