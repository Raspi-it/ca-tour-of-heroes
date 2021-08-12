import { Injectable } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError, ServerError } from "src/app/core/errors";
import { AbstractDeleteHeroDataSource } from "../data-source/abstract.delete.hero.data.source";
import { AbstractDeleteHeroRepository } from "./abstract.delete.hero.repository";
@Injectable()
export class DeleteHeroRepository extends AbstractDeleteHeroRepository {
    constructor(private readonly dataSource: AbstractDeleteHeroDataSource){
        super();
    }

    async deleteHero(param): Promise<AbstractCustomError | void> {
        try {
            if (!!(param && param.id)) {
                await this.dataSource.deleteHero(param);
            } else {
                throw new ServerError('missing param');
            }
        } catch (error) {
            return new ServerError();
        }
    }
}