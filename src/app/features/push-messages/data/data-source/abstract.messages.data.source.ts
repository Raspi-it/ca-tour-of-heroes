import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractMessagesDataSource extends AbstractDataSource {
    abstract pushMessages(param): Promise<string[]>;
}