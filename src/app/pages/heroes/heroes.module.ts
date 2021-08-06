import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AddHeroFeatureModule } from "src/app/features/add-hero/add.hero.feature.module";
import { DeleteHeroFeatureModule } from "src/app/features/delete-hero/delete.hero.feature.module";
import { HeroesPage } from "./heroes.page";
import { HeroesPageState } from "./heroes.page.state";

@NgModule({
    imports: [
        NgxsModule.forFeature([
             HeroesPageState
        ]),
        CommonModule,
        DeleteHeroFeatureModule,
        AddHeroFeatureModule
    ],
    declarations: [
        //Components
        HeroesPage
    ],
    exports:  [HeroesPage]
})
export class HeroesModule { }