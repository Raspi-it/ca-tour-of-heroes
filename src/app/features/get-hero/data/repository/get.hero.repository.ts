import { Injectable } from "@angular/core";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { ServerError } from "src/app/core/errors";
import { AbstractGetHeroDataSource } from "../data-source/abstract.get.hero.data.source";
import { AbstractGetHeroRepository } from "./abstract.get.hero.repository";
@Injectable()
export class GetHeroRepository extends AbstractGetHeroRepository {
    constructor(private readonly dataSource: AbstractGetHeroDataSource){
        super();
    }

    async getHero(param): Promise<AbstractBaseEntity> {
        
        try {
            if (!!(param)) {
                const raw = await this.dataSource.getHero(param);
                return raw;
            } else {
                throw new ServerError();
            }
        }
         catch (error) {
            console.error(error);
            return error;
        }
    }
}