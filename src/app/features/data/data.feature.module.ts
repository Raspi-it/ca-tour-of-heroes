import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractDataDataSource } from "./data/data-source/abstract.data.data.source";
import { DataDataSource } from "./data/data-source/data.data.source";
import { AbstractDataRepository } from "./data/repository/abstract.data.repository";
import { DataRepository } from "./data/repository/data.repository";
import { AbstractDataUseCase } from "./domain/use-case/abstract.data.use.case";
import { DataUseCase } from "./domain/use-case/data.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractDataUseCase,
            useClass: DataUseCase
        },
        {
            provide: AbstractDataRepository,
            useClass: DataRepository
        },
        {
            provide: AbstractDataDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new DataDataSource(http);
            }
        }
        ]
})
export class DataFeatureModule { }