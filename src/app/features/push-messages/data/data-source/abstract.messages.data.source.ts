import { AbstractDataSource } from "src/app/core/data/data-source/abstract.data.source";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractMessagesDataSource extends AbstractDataSource {
    abstract pushMessages(param): Promise<void | AbstractCustomError>;
}