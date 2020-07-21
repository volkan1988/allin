import { Component, OnInit } from '@angular/core';

import { Realisation } from '../../models/realisation.model';
import { RealisationService } from '../../services/realisation.service';

@Component({
  selector: 'app-home-realisation',
  templateUrl: './home-realisation.component.html',
  styleUrls: ['./home-realisation.component.scss']
})
export class HomeRealisationComponent implements OnInit {

  realisations: Realisation[];
  
  constructor(private realisationService: RealisationService) { }

  ngOnInit() {
   this.realisations = this.realisationService.getLastRealisations(5);
  }

}
