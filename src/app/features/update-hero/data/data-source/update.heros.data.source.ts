import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractUpdateHeroDataSource } from "./abstract.update.hero.data.source";

@Injectable()
export class UpdateHeroDataSource extends AbstractUpdateHeroDataSource {
    
    heroId: number;
    new_name: string;

    constructor(private readonly http: HttpClient){
        super();
    }

    // Link hinzufügen und testen
    async updateHero(params): Promise<HeroModel | void> {

        return this.http.put<any>('http://localhost:8080/api/hero/update',params).pipe().toPromise();
    }
}