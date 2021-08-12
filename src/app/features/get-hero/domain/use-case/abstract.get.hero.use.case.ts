import { AbstractBaseEntity } from "src/app/core/domain/base/abstract.base.entity";
import { AbstractBaseMappingEntity } from "src/app/core/domain/base/abstract.base.mapping.entity";
import { AbstractUseCase } from "src/app/core/domain/usecase/abstract.use.case";

export abstract class AbstractGetHeroUseCase extends AbstractUseCase {
    abstract execute(param): Promise<AbstractBaseEntity>;
}