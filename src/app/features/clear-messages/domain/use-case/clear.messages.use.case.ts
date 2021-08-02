import { Injectable } from "@angular/core";
import { AbstractClearMessagesRepository } from "../../data/repository/abstract.clear.messages.repository";
import { AbstractClearMessagesUseCase } from "./abstract.clear.messages.use.case";

@Injectable()
export class ClearMessagesUseCase extends AbstractClearMessagesUseCase {
    constructor(private readonly repository: AbstractClearMessagesRepository) {
        super();
    }

    async execute(): Promise<string[]> {
        return this.repository.clearMessages();
    }
}