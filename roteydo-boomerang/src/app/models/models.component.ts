import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoomerangModel } from './boomerang-model';
import { ModelsService } from './models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  availableModels$: Observable<BoomerangModel[]>;
  
  constructor(private modelsService: ModelsService) { 

  }

  ngOnInit(): void {
    this.availableModels$ = this.modelsService.getAvailableModels();
  }
}
