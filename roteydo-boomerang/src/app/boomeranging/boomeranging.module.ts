import { NgModule } from "@angular/core";
import { BoomerangingRoutingModule } from "./boomeranging-routing.module";
import { BoomerangingComponent } from "./boomeranging.component";

@NgModule({
    imports: [
        BoomerangingRoutingModule
    ],
    declarations: [
        BoomerangingComponent
    ]
})
export class BoomerangingModule {}