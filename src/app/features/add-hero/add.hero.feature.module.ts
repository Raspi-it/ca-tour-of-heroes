import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractAddHeroDataSource } from "./data/data-source/abstract.add.hero.data.source";
import { AddHeroDataSource } from "./data/data-source/add.heros.data.source";
import { AbstractAddHeroRepository } from "./data/repository/abstract.add.hero.repository";
import { AddHeroRepository } from "./data/repository/add.hero.repository";
import { AbstractAddHeroUseCase } from "./domain/use-case/abstract.add.hero.use.case";
import { AddHeroUseCase } from "./domain/use-case/add.hero.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractAddHeroUseCase,
            useClass: AddHeroUseCase
        },
        {
            provide: AbstractAddHeroRepository,
            useClass: AddHeroRepository
        },
        {
            provide: AbstractAddHeroDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new AddHeroDataSource(http);
            }
        }
        ]
})
export class AddHeroFeatureModule { }