import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {GeometryComponent} from './sections/geometry/geometry.component';
import {AtlasComponent} from './sections/atlas/atlas.component';
import {LHCbComponent} from './sections/lhcb/lhcb.component';
import {TrackmlComponent} from './sections/trackml/trackml.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { PlaygroundComponent } from './sections/playground/playground.component';
import { PlaygroundVrComponent } from './sections/playground-vr/playground-vr.component';
import { AttributePipe } from './services/extras/attribute.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CmsComponent } from './sections/cms/cms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'geometry', component: GeometryComponent},
  {path: 'atlas', component: AtlasComponent},
  {path: 'lhcb', component: LHCbComponent},
  {path: 'trackml', component: TrackmlComponent},
  {path: 'cms', component: CmsComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'playgroundVR', component: PlaygroundVrComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeometryComponent,
    AtlasComponent,
    LHCbComponent,
    TrackmlComponent,
    NavComponent,
    PlaygroundComponent,
    PlaygroundVrComponent,
    AttributePipe,
    CmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
