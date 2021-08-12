import { Injectable } from "@angular/core";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { AbstractGetHeroRepository } from "../../data/repository/abstract.get.hero.repository";
import { AbstractGetHeroUseCase } from "./abstract.get.hero.use.case";

@Injectable()
export class GetHeroUseCase extends AbstractGetHeroUseCase {
    constructor(private readonly repository: AbstractGetHeroRepository) {
        super();
    }

    async execute(param): Promise<AbstractBaseEntity> {
        return this.repository.getHero(param);
    }
}