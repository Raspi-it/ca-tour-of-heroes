import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";
import { AbstractCustomError } from "src/app/core/errors";

export abstract class AbstractUpdateHeroUseCase extends AbstractUseCase {
    abstract execute(param): Promise<HeroEntity | AbstractCustomError | void>;
}