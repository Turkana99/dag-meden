import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { LegalIndividualPersonComponent } from './components/legal-individual-person/legal-individual-person.component';
import { DangerObjectsComponent } from './components/danger-objects/danger-objects.component';
import { FeauturesComponent } from './components/feautures/feautures.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterDocsComponent } from './components/register-docs/register-docs.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'legal-individual-person',
        component: LegalIndividualPersonComponent,
      },
      {
        path: 'danger-objects',
        component: DangerObjectsComponent,
      },
      {
        path: 'features',
        component: FeauturesComponent,
      },
      {
        path: 'resgiter-docs',
        component: RegisterDocsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule {}
