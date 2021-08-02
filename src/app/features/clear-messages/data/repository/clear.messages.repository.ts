import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { AbstractClearMessagesDataSource } from "../data-source/abstract.clear.messages.data.source";
import { AbstractClearMessagesRepository } from "./abstract.clear.messages.repository";
@Injectable()
export class ClearMessagesRepository extends AbstractClearMessagesRepository {
    constructor(private readonly dataSource: AbstractClearMessagesDataSource){
        super();
    }

    async clearMessages(): Promise<string[]> {
        try {
            const raw = await this.dataSource.clearMessages();
            console.log('Messages cleared!', raw);
            return raw;
        } catch (error) {
            console.error(error);
        } return [];
    }
}