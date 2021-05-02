import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BoomerangModel } from "./boomerang-model";

@Injectable({
    providedIn: 'root'
})  
export class ModelsService {    
    private readonly abailableModels: BoomerangModel[] = [
        {
            source: '../../assets/img/models/Kangoroo.jpg',
            name: 'Kangaroo Boomerang',
            description: '',
            price: 10
        },
        {
            source: '../../assets/img/models/PeterPan.jpg',
            name: 'Peter Pan',
            description: '',
            price: 10
        }
    ];  
    
    getAvailableModels(): Observable<BoomerangModel[]> {
        return of(this.abailableModels);
    }
}