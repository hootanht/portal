import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { MatTableModule } from '@angular/material/table';
import { CreateTeamPageComponent } from './pages/create-team-page/create-team-page.component';
import { ShowTeamPageComponent } from './pages/show-team-page/show-team-page.component';
import { JamSharedModule } from '../shared/jam-shared/jam-shared.module';


@NgModule({
  declarations: [
    IndexPageComponent,
    CreateTeamPageComponent,
    ShowTeamPageComponent
  ],
  imports: [
    JamSharedModule,
    TeamRoutingModule,
    MatTableModule
  ]
})
export class TeamModule { }
