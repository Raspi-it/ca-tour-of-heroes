import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractDataDataSource } from "./abstract.data.data.source";

@Injectable()
export class DataDataSource extends AbstractDataDataSource {
    constructor(private readonly http: HttpClient){
        super();
    }

    async getData(): Promise<AbstractBaseModel[]> {
        return this.http.get<any[]>('http://localhost:8080/api/heroes').pipe().toPromise();
    }
}