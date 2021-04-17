import { NgModule } from "@angular/core";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";

@NgModule({
    imports: [
        GalleryRoutingModule
    ],
    declarations: [
        GalleryComponent
    ]
})
export class GalleryModule {}