import { Component, OnInit } from '@angular/core';

import { Realisation } from '../../models/realisation.model';
import { RealisationService } from '../../services/realisation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit {

  realisations: Realisation[];
  
  constructor(private realisationService: RealisationService) { }

  ngOnInit() {
   this.realisations = this.realisationService.getLastRealisations(5);
  }

}
