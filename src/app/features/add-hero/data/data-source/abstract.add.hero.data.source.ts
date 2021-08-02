import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";

export abstract class AbstractAddHeroDataSource extends AbstractDataSource {
    abstract addHero(params): Promise<HeroEntity[]>;
}