import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractDeleteHeroRepository extends AbstractRepository {
    abstract deleteHero(param): Promise<AbstractCustomError | void>;
}