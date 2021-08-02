import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractAddHeroRepository extends AbstractRepository {
    abstract addHero(param): Promise<HeroEntity[] | AbstractCustomError>;
}