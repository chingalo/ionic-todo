import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private appConfigService: AppConfigService) {}
  ngOnInit() {
    this.intiateApp();
  }

  async intiateApp() {
    await this.appConfigService.setConnection();
  }
}
