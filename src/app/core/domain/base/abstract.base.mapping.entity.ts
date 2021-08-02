import { AbstractBaseEntity } from "./abstract.base.entity";

export abstract class AbstractBaseMappingEntity extends AbstractBaseEntity {
    readonly id: number;
    readonly name: string;

    constructor(obj: Partial<AbstractBaseMappingEntity>) {
        super(obj);
        Object.assign(this, obj);
    }
}