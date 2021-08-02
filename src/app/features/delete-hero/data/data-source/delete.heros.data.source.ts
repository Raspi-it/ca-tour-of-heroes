import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractDeleteHeroDataSource } from "./abstract.delete.hero.data.source";

@Injectable()
export class DeleteHeroDataSource extends AbstractDeleteHeroDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    // Link hinzufügen und testen
    async deleteHero(param): Promise<HeroModel> {
        return this.http.request<HeroModel>('delete','http://localhost:8080/api/hero/delete/', {
            body: param,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).toPromise();
    }
}