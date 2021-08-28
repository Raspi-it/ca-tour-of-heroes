import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";

export abstract class AbstractClearMessagesRepository extends AbstractRepository {
    abstract clearMessages(): Promise<string[]>;
}