import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LightboxModule } from "ngx-lightbox";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";

@NgModule({
    imports: [
        GalleryRoutingModule,
        CommonModule,
        LightboxModule
    ],
    declarations: [
        GalleryComponent
    ]
})
export class GalleryModule {}