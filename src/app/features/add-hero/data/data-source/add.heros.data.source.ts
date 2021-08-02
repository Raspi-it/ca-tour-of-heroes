import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HeroModel } from "src/app/core/data/models/hero.model";
import { AbstractAddHeroDataSource } from "./abstract.add.hero.data.source";

@Injectable()
export class AddHeroDataSource extends AbstractAddHeroDataSource {
    
    hero: HeroModel;
    new_name: string;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(private readonly http: HttpClient){
        super();
    }

    // Link hinzufügen und testen
    async addHero(params?: Partial<HeroModel[]>): Promise<HeroModel[]> {

        return this.http.put<any[]>('http://localhost:8080/api/hero/add/',params, this.httpOptions).pipe(
            map(hero => {
                return HeroModel[0].fromJson(hero);
            })
        ).toPromise();

    }
}