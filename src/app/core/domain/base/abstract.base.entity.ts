import { AbstractEntity } from "./abstract.entity";

export abstract class AbstractBaseEntity extends AbstractEntity {
    readonly name: string;

    constructor(obj: Partial<AbstractBaseEntity>) {
        super(obj);
        Object.assign(this, obj);
    }
}