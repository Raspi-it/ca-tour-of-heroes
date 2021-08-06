import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractClearMessagesDataSource } from "./data/data-source/abstract.clear.messages.data.source";
import { ClearMessagesDataSource } from "./data/data-source/clear.messages.data.source";
import { AbstractClearMessagesRepository } from "./data/repository/abstract.clear.messages.repository";
import { ClearMessagesRepository } from "./data/repository/clear.messages.repository";
import { AbstractClearMessagesUseCase } from "./domain/use-case/abstract.clear.messages.use.case";
import { ClearMessagesUseCase } from "./domain/use-case/clear.messages.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractClearMessagesUseCase,
            useClass: ClearMessagesUseCase
        },
        {
            provide: AbstractClearMessagesRepository,
            useClass: ClearMessagesRepository
        },
        {
            provide: AbstractClearMessagesDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new ClearMessagesDataSource(http);
            }
        }
        ]
})
export class ClearMessagesFeatureModule { }