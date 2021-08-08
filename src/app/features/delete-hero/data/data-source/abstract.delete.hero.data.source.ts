import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";

export abstract class AbstractDeleteHeroDataSource extends AbstractDataSource {
    abstract deleteHero(param): Promise<HeroEntity | void>;
}