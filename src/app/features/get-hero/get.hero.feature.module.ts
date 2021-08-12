import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractGetHeroDataSource } from "./data/data-source/abstract.get.hero.data.source";
import { GetHeroDataSource } from "./data/data-source/get.hero.data.source";
import { AbstractGetHeroRepository } from "./data/repository/abstract.get.hero.repository";
import { GetHeroRepository } from "./data/repository/get.hero.repository";
import { AbstractGetHeroUseCase } from "./domain/use-case/abstract.get.hero.use.case";
import { GetHeroUseCase } from "./domain/use-case/get.hero.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractGetHeroUseCase,
            useClass: GetHeroUseCase
        },
        {
            provide: AbstractGetHeroRepository,
            useClass: GetHeroRepository
        },
        {
            provide: AbstractGetHeroDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new GetHeroDataSource(http);
            }
        }
        ]
})
export class GetHeroFeatureModule { }