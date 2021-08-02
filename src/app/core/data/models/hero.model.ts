import { HeroEntity } from "../../domain/entity/hero.entity";
import { AbstractBaseModel } from "../base/abstract.base.model";

export class HeroModel extends AbstractBaseModel {

    static fromEntity(obj: Partial<HeroEntity>): HeroModel {
        return new HeroModel({
            ...obj,
            id: obj.id
        });
    }

    static fromJson(obj: any): HeroModel {
        return new HeroModel({
            ...obj,
            id: obj.id,
            name: obj.name
        })
    }
}