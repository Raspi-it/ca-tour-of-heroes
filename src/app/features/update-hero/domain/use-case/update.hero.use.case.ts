import { Injectable } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractUpdateHeroRepository } from "../../data/repository/abstract.update.hero.repository";
import { AbstractUpdateHeroUseCase } from "./abstract.update.hero.use.case";

@Injectable()
export class UpdateHeroUseCase extends AbstractUpdateHeroUseCase {
    constructor(private readonly repository: AbstractUpdateHeroRepository) {
        super();
    }

    async execute(param): Promise<HeroEntity | AbstractCustomError | void> {
        return this.repository.updateHero(param);
    }
}