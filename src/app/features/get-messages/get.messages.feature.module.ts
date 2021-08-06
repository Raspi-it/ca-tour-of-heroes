import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractGetMessagesDataSource } from "./data/data-source/abstract.get.messages.data.source";
import { GetMessagesDataSource } from "./data/data-source/get.messages.data.source";
import { AbstractGetMessagesRepository } from "./data/repository/abstract.get.messages.repository";
import { GetMessagesRepository } from "./data/repository/get.messages.repository";
import { AbstractGetMessagesUseCase } from "./domain/use-case/abstract.get.messages.use.case";
import { GetMessagesUseCase } from "./domain/use-case/get.messages.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractGetMessagesUseCase,
            useClass: GetMessagesUseCase
        },
        {
            provide: AbstractGetMessagesRepository,
            useClass: GetMessagesRepository
        },
        {
            provide: AbstractGetMessagesDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new GetMessagesDataSource(http);
            }
        }
        ]
})
export class GetMessagesFeatureModule { }