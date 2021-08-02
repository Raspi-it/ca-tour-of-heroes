import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AbstractDeleteHeroDataSource } from "./data/data-source/abstract.delete.hero.data.source";
import { DeleteHeroDataSource } from "./data/data-source/delete.heros.data.source";
import { AbstractDeleteHeroRepository } from "./data/repository/abstract.delete.hero.repository";
import { DeleteHeroRepository } from "./data/repository/delete.hero.repository";
import { AbstractDeleteHeroUseCase } from "./domain/use-case/abstract.delete.hero.use.case";
import { DeleteHeroUseCase } from "./domain/use-case/delete.hero.use.case";

@NgModule({
    imports: [

    ],
    providers: [
        {
            provide: AbstractDeleteHeroUseCase,
            useClass: DeleteHeroUseCase
        },
        {
            provide: AbstractDeleteHeroRepository,
            useClass: DeleteHeroRepository
        },
        {
            provide: AbstractDeleteHeroDataSource,
            deps: [HttpClient],
            useFactory: (http: HttpClient) => {
                return new DeleteHeroDataSource(http);
            }
        }
        ]
})
export class DeleteHeroFeatureModule { }