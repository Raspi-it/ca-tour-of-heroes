import { AbstractBaseMappingModel } from "src/app/core/data/base/abstract.base.mapping.model";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";
import { HeroModel } from "src/app/core/data/models/hero.model";

export abstract class AbstractClearMessagesDataSource extends AbstractDataSource {
    abstract clearMessages(): Promise<string[]>;
}