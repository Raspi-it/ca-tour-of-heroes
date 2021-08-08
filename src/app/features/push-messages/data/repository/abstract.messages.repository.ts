import { AbstractRepository } from "src/app/core/data/repository/abstract.repository";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractMessagesRepository extends AbstractRepository {
    abstract pushMessages(param): Promise<void | AbstractCustomError>;
}