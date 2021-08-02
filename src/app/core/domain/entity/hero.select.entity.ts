import { AbstractEntity } from "../base/abstract.entity";

export class HeroSelectEntity extends AbstractEntity {
    readonly name: string;
    readonly id: number;

    private constructor({ name }: Partial<HeroSelectEntity>) {
        super({});
        this.name = name;
    }

    static fromUserInput({ name }: Partial<HeroSelectEntity>) {
        return new HeroSelectEntity({
            name
        });
    }
    
    static fromModel({
        name
    }: Partial<HeroSelectEntity>) {
        return new HeroSelectEntity({
            name
        });
    }
}