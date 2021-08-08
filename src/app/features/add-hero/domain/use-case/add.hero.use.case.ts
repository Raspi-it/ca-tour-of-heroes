import { Injectable } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractAddHeroRepository } from "../../data/repository/abstract.add.hero.repository";
import { AbstractAddHeroUseCase } from "./abstract.add.hero.use.case";

@Injectable()
export class AddHeroUseCase extends AbstractAddHeroUseCase {
    constructor(private readonly repository: AbstractAddHeroRepository) {
        super();
    }

    async execute(param): Promise<HeroEntity[] | AbstractCustomError | void> {
        return this.repository.addHero(param);
    }
}