import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";

export abstract class AbstractClearMessagesDataSource extends AbstractDataSource {
    abstract clearMessages(): Promise<string[]>;
}