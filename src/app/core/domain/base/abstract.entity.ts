export abstract class AbstractEntity {
    readonly id: number;
    constructor(obj: Partial<AbstractEntity>) {
        Object.assign(this, obj);
    }
}