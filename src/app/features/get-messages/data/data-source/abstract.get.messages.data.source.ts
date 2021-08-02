import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractGetMessagesDataSource extends AbstractDataSource {
    abstract getMessages(): Promise<string[]>;
}