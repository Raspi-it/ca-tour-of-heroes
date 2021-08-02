export abstract class AbstractCustomError extends Error{
    constructor(msg?: string) {
        super(msg || 'Something went wrong!');
    }
}

export class ServerError extends AbstractCustomError {  }