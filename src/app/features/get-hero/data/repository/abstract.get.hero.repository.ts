import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";

export abstract class AbstractGetHeroRepository extends AbstractRepository {
    abstract getHero(param): Promise<AbstractBaseEntity>;
}