import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractUpdateHeroRepository extends AbstractRepository {
    abstract updateHero(param): Promise<HeroEntity | AbstractCustomError | void>;
}