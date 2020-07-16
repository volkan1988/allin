import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  constructor(private deviceService: DeviceDetectorService) { }


  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }
  
}
