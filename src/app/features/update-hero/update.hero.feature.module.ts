import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractUpdateHeroDataSource } from "./data/data-source/abstract.update.hero.data.source";
import { UpdateHeroDataSource } from "./data/data-source/update.heros.data.source";
import { AbstractUpdateHeroRepository } from "./data/repository/abstract.update.hero.repository";
import { UpdateHeroRepository } from "./data/repository/update.hero.repository";
import { AbstractUpdateHeroUseCase } from "./domain/use-case/abstract.update.hero.use.case";
import { UpdateHeroUseCase } from "./domain/use-case/update.hero.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractUpdateHeroUseCase,
            useClass: UpdateHeroUseCase
        },
        {
            provide: AbstractUpdateHeroRepository,
            useClass: UpdateHeroRepository
        },
        {
            provide: AbstractUpdateHeroDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new UpdateHeroDataSource(http);
            }
        }
        ]
})
export class UpdateHeroFeatureModule { }