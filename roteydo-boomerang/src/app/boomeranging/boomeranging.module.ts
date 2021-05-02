import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BoomerangingRoutingModule } from "./boomeranging-routing.module";
import { BoomerangingComponent } from "./boomeranging.component";

@NgModule({
    imports: [
        BoomerangingRoutingModule,
        SharedModule
    ],
    declarations: [
        BoomerangingComponent
    ]
})
export class BoomerangingModule {}