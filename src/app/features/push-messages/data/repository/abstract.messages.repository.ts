import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";

export abstract class AbstractMessagesRepository extends AbstractRepository {
    abstract pushMessages(param): Promise<string[]>;
}