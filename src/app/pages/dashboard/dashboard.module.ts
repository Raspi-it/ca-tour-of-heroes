import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { DataFeatureModule } from "src/app/features/data/data.feature.module";
import { HeroesModule } from "../heroes/heroes.module";

@NgModule({
    imports: [
        CoreModule,
        DataFeatureModule,
        HeroesModule
    ],
    declarations: [
    ]
})
export class DashboardModule { }