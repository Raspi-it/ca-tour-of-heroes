import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractDeleteHeroDataSource extends AbstractDataSource {
    abstract deleteHero(param): Promise<void>;
}