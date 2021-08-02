import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";

export abstract class AbstractClearMessagesUseCase extends AbstractUseCase {
    abstract execute(): Promise<string[]>;
}