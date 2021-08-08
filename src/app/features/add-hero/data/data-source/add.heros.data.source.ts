import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractAddHeroDataSource } from "./abstract.add.hero.data.source";

@Injectable()
export class AddHeroDataSource extends AbstractAddHeroDataSource {

    constructor(private readonly http: HttpClient){
        super();
    }

    // Link hinzufügen und testen
    async addHero(params?): Promise<HeroModel[] | void> {

        return this.http.put<any[]>('http://localhost:8080/api/hero/add/',params).pipe().toPromise();

    }
}