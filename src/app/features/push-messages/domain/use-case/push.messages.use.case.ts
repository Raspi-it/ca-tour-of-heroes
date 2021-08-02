import { Injectable } from "@angular/core";
import { AbstractMessagesRepository } from "../../data/repository/abstract.messages.repository";
import { AbstractPushMessagesUseCase } from "./abstract.push.messages.use.case";

@Injectable()
export class PushMessagesUseCase extends AbstractPushMessagesUseCase {
    constructor(private readonly repository: AbstractMessagesRepository) {
        super();
    }

    async execute(param): Promise<string[]> {
        console.log("this far: PushMessagesUseCase");
        return this.repository.pushMessages(param);
    }
}