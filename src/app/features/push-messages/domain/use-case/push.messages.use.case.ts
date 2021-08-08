import { Injectable } from "@angular/core";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractMessagesRepository } from "../../data/repository/abstract.messages.repository";
import { AbstractPushMessagesUseCase } from "./abstract.push.messages.use.case";

@Injectable()
export class PushMessagesUseCase extends AbstractPushMessagesUseCase {
    constructor(private readonly repository: AbstractMessagesRepository) {
        super();
    }

    async execute(param): Promise<void | string | AbstractCustomError> {
        return this.repository.pushMessages(param);
    }
}