import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractGetHeroDataSource extends AbstractDataSource {
    abstract getHero(param): Promise<AbstractBaseModel>;
}