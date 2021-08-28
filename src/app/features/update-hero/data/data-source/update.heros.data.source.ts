import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractUpdateHeroDataSource } from "./abstract.update.hero.data.source";

@Injectable()
export class UpdateHeroDataSource extends AbstractUpdateHeroDataSource {

    constructor(private readonly http: HttpClient){
        super();
    }

    async updateHero(params): Promise<HeroModel | void> {

        return this.http.put<any>('http://localhost:8080/api/hero/update',params).pipe().toPromise();
    }
}