import { AbstractModel } from "./abstract.model";

export abstract class AbstractBaseModel extends AbstractModel {
    readonly name: string;

    constructor({
        id,
        name
    }: Partial<AbstractBaseModel>) {
        super({
            id,
        });
        this.name = name;
    }
}