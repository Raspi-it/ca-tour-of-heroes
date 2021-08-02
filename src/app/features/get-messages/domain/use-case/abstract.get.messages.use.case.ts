import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";

export abstract class AbstractGetMessagesUseCase extends AbstractUseCase {
    abstract execute(): Promise<string[]>;
}