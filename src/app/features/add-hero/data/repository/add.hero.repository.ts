import { Injectable } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError, ServerError } from "src/app/core/errors";
import { AbstractAddHeroDataSource } from "../data-source/abstract.add.hero.data.source";
import { AbstractAddHeroRepository } from "./abstract.add.hero.repository";
@Injectable()
export class AddHeroRepository extends AbstractAddHeroRepository {
    constructor(private readonly dataSource: AbstractAddHeroDataSource){
        super();
    }

    async addHero(param): Promise<HeroEntity[] | AbstractCustomError> {
        try {
            if (!!(param && param.id)) {
            const raw = await this.dataSource.addHero(param);
            console.log(raw);
            return HeroEntity[0].fromModel(raw);
            } else {
                throw new ServerError('missing param');
            }
        } catch (error) {
            return new ServerError();
        }
    }
}