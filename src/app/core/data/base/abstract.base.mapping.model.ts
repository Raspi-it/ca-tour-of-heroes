import { AbstractBaseModel } from "./abstract.base.model";

export abstract class AbstractBaseMappingModel extends AbstractBaseModel {
    readonly id: number;
    readonly name: string;
    constructor(obj: Partial<AbstractBaseMappingModel>) {
        super(obj);
        Object.assign(this, obj);
    }
}