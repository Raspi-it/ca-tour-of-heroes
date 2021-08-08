import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractPushMessagesUseCase extends AbstractUseCase {
    abstract execute(param): Promise<void | AbstractCustomError>;
}