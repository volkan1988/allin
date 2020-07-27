import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../models/realisation.model';
import { RealisationService } from '../services/realisation.service';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit {

  realisation: Realisation;

  constructor(
    private route: ActivatedRoute,
    private realisationService: RealisationService
    ) { }

  ngOnInit() {
      var id = this.route.snapshot.params['id'];
      this.realisation = this.realisationService.getRealisationById(id);
  }

}
