import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService,
    private titleService: Title) {

  }

  ngOnInit() {
    this.translateService.get('COMMON.PAGE_TITLE').subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}
