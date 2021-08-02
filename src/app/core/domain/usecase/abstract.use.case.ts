import { AbstractCustomError } from "../../errors";
import { AbstractEntity } from "../base/abstract.entity";

export abstract class AbstractUseCase {
    abstract execute(params?: any): Promise<void | AbstractEntity | AbstractCustomError | AbstractEntity[] | string[]>
}