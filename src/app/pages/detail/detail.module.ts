import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GetHeroFeatureModule } from "src/app/features/get-hero/get.hero.feature.module";
import { UpdateHeroFeatureModule } from "src/app/features/update-hero/update.hero.feature.module";
import { DetailPage } from "./detail.page";
import { DetailPageState } from "./detail.page.state";

@NgModule({
    imports: [
        NgxsModule.forFeature([
            DetailPageState
        ]),
        CommonModule,
        FormsModule,
        UpdateHeroFeatureModule,
        GetHeroFeatureModule,

        AppRoutingModule

    ],
    declarations: [
        //Components
        DetailPage
    ],
    exports: [DetailPage]
})
export class DetailModule { }