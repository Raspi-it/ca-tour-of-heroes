import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractDeleteHeroDataSource } from "./abstract.delete.hero.data.source";

@Injectable()
export class DeleteHeroDataSource extends AbstractDeleteHeroDataSource {
    
    constructor(private readonly http: HttpClient){
        super();
    }

    async deleteHero(param): Promise<void> {
        return this.http.post<any>('http://localhost:8080/api/hero/delete/', {
            body: param,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).toPromise();
    }
}