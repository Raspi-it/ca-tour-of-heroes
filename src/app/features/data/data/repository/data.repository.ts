import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { AbstractDataDataSource } from "../data-source/abstract.data.data.source";
import { AbstractDataRepository } from "./abstract.data.repository";

@Injectable()
export class DataRepository extends AbstractDataRepository {
    constructor(private readonly dataSource: AbstractDataDataSource){
        super();
    }

    async getData(): Promise<AbstractBaseEntity[] | AbstractBaseMappingEntity[]> {
        try {
            const raw = await this.dataSource.getData();
            return (raw as AbstractBaseModel[]).map(m => ({
                ...m,
                id: m.id,
                name: m.name
            } as AbstractBaseEntity));
        } catch (error) {
            console.error(error);
        } return [];
    }
}