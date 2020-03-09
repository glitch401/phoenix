import { Component, OnInit } from '@angular/core';
import {EventdisplayService} from '../../services/eventdisplay.service';
import {Configuration} from '../../services/extras/configuration.model';
import {PresetView} from '../../services/extras/preset-view.model';
import {HttpClient} from '@angular/common/http';
import {CMSLoader} from '../../services/loaders/cms-loader';


@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  events: any;
  loader: CMSLoader;

  constructor(private eventDisplay: EventdisplayService,private http: HttpClient) {
  }

  ngOnInit() {
    const configuration = new Configuration();
    configuration.presetViews = [
      new PresetView('Right View', [0, 0, 60], 'right'),
      new PresetView('Center View', [-5, 10, 0], 'circle'),
      new PresetView('Left View', [0, 0, -60], 'left')
    ];

    this.eventDisplay.init(configuration);
    this.eventDisplay.loadGLTFDetector('assets/geometry/CMS/cms.gltf');
    this.loader = new CMSLoader();
    configuration.eventDataLoader = this.loader;
    //this.loadEventData(configuration);
  }
  private loadEventData(config: Configuration) {
    this.http.get('assets/files/lhcb/Event_876295434').subscribe((data: any) => {
      this.loader.process(data);
      const eventData = this.loader.getEventData();
      this.eventDisplay.buildEventDataFromJSON(eventData);
    });
  }

}
