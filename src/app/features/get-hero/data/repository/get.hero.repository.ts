import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractGetHeroDataSource } from "../data-source/abstract.get.hero.data.source";
import { AbstractGetHeroRepository } from "./abstract.get.hero.repository";
@Injectable()
export class GetHeroRepository extends AbstractGetHeroRepository {
    constructor(private readonly dataSource: AbstractGetHeroDataSource){
        super();
    }

    async getHero(param): Promise<AbstractBaseEntity> {
        
        try {
            const raw = await this.dataSource.getHero(param);
            return raw;
        }
         catch (error) {
            console.error(error);
            return error;
        }
    }
}