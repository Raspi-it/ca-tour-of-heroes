import { Injectable } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError, ServerError } from "src/app/core/errors";
import { AbstractUpdateHeroDataSource } from "../data-source/abstract.update.hero.data.source";
import { AbstractUpdateHeroRepository } from "./abstract.update.hero.repository";
@Injectable()
export class UpdateHeroRepository extends AbstractUpdateHeroRepository {
    constructor(private readonly dataSource: AbstractUpdateHeroDataSource){
        super();
    }

    async updateHero(param): Promise<HeroEntity | AbstractCustomError | void> {
        try {
            if (!!(param)) {
                await this.dataSource.updateHero(param);
            } else {
                throw new ServerError;
            }
        } catch (error) {
            return error;
        }
    }
}