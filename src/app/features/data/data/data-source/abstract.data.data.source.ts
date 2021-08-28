import { AbstractBaseMappingModel } from "src/app/core/data/base/abstract.base.mapping.model";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractDataDataSource extends AbstractDataSource {
    abstract getData(): Promise<AbstractBaseModel[] | AbstractBaseMappingModel[]>;
}