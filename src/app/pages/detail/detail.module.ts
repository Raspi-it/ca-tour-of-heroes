import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
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
        UpdateHeroFeatureModule

    ],
    declarations: [
        //Components
        DetailPage
    ],
    exports: [DetailPage]
})
export class DetailModule { }