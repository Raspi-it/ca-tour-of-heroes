import { Injectable } from "@angular/core";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { AbstractDataRepository } from "../../data/repository/abstract.data.repository";
import { AbstractDataUseCase } from "./abstract.data.use.case";

@Injectable()
export class DataUseCase extends AbstractDataUseCase {
    constructor(private readonly repository: AbstractDataRepository) {
        super();
    }

    async execute(): Promise<AbstractBaseEntity[] | AbstractBaseMappingEntity[]> {
        return this.repository.getData();;
    }
}