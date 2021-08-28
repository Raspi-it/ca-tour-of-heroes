import { Injectable } from "@angular/core";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractDeleteHeroRepository } from "../../data/repository/abstract.delete.hero.repository";
import { AbstractDeleteHeroUseCase } from "./abstract.delete.hero.use.case";

@Injectable()
export class DeleteHeroUseCase extends AbstractDeleteHeroUseCase {
    constructor(private readonly repository: AbstractDeleteHeroRepository) {
        super();
    }

    async execute(param): Promise<AbstractCustomError | void> {
        return this.repository.deleteHero(param);
    }
}