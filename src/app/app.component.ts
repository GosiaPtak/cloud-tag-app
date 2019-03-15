import { Component, OnInit } from '@angular/core';
import { CloudAppServiceService, Tags } from './cloud-app-service.service';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tagsService: CloudAppServiceService) {}
  title = 'cloud-tag-app';
  tags: Tags;

  showTags() {
    this.tagsService.getTags().subscribe((data: Tags) => {
      this.tags = data;
    });
  }
  ngOnInit() {
    this.showTags();
  }
}
