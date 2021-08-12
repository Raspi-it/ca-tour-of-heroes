import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractBaseModel } from "src/app/core/data/base/abstract.base.model";
import { AbstractGetHeroDataSource } from "./abstract.get.hero.data.source";

@Injectable()
export class GetHeroDataSource extends AbstractGetHeroDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async getHero(param): Promise<AbstractBaseModel> {
        return this.http.get<any>('http://localhost:8080/api/hero/'+param).toPromise();
    }
}