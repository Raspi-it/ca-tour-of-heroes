export abstract class AbstractModel {
    readonly id: number;
    constructor({
        id,
    }: Partial<AbstractModel>) {
        this.id= id;
    }
}