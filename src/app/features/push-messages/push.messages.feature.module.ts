import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractMessagesDataSource } from "./data/data-source/abstract.messages.data.source";
import { MessagesDataSource } from "./data/data-source/messages.data.source";
import { AbstractMessagesRepository } from "./data/repository/abstract.messages.repository";
import { MessagesRepository } from "./data/repository/messages.repository";
import { AbstractPushMessagesUseCase } from "./domain/use-case/abstract.push.messages.use.case";
import { PushMessagesUseCase } from "./domain/use-case/push.messages.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractPushMessagesUseCase,
            useClass: PushMessagesUseCase
        },
        {
            provide: AbstractMessagesRepository,
            useClass: MessagesRepository
        },
        {
            provide: AbstractMessagesDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new MessagesDataSource(http);
            }
        }
        ]
})
export class PushMessagesFeatureModule { }