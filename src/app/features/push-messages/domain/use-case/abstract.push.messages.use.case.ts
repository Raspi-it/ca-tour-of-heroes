import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";

export abstract class AbstractPushMessagesUseCase extends AbstractUseCase {
    abstract execute(param): Promise<string[]>;
}