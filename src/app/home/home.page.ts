import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private appConfigService: AppConfigService) {}
  ngOnInit() {}

  async intiateApp() {
    try {
      await this.appConfigService.setConnection('dhis_touch');
    } catch (error) {
      console.log(JSON.stringify({ type: 'COnnection error : ', error }));
    }
  }
}
