import { HeroModel } from "../../data/models/hero.model";
import { AbstractBaseEntity } from "../base/abstract.base.entity";

export class HeroEntity extends AbstractBaseEntity {
    static fromModel(obj: Partial<HeroModel>): HeroEntity {
        return new HeroEntity({
            ...obj,
            id: obj.id
        });
    }

    static fromUserInput(obj: Partial<HeroEntity>): HeroEntity {
        return new HeroEntity({ ...obj });
    }
}