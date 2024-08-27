import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainComponent } from './components/main/main.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';

import { NgApexchartsModule } from 'ng-apexcharts';
import { Charts1Component } from './components/charts/charts1/charts1.component';
import { Chart2Component } from './components/charts/chart2/chart2.component';
import { ChartModule } from 'primeng/chart';
import { RegisterDocsComponent } from './components/register-docs/register-docs.component';
import { LegalIndividualPersonComponent } from './components/legal-individual-person/legal-individual-person.component';
import { NewIndividualPersonComponent } from './components/new-person/new-individual-person/new-individual-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableTogglableColumnsComponent } from '../shared/table-togglable-columns/table-togglable-columns.component';
import { TableMenuDialogComponent } from '../dialogs/table-menu-dialog/table-menu-dialog.component';
import { NewPersonComponent } from './components/new-person/new-person/new-person.component';
import { NewLegalPersonComponent } from './components/new-person/new-legal-person/new-legal-person.component';
import { DangerObjectsComponent } from './components/danger-objects/danger-objects.component';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [
    CabinetComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    Chart2Component,
    Charts1Component,
    RegisterDocsComponent,
    LegalIndividualPersonComponent,
    NewIndividualPersonComponent,
    TableTogglableColumnsComponent,
    TableMenuDialogComponent,
    NewPersonComponent,
    NewLegalPersonComponent,
    DangerObjectsComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    ToastModule,
    ButtonModule,
    MaterialModule,
    MatMenuModule,
    InputTextareaModule,
    InputTextModule,
    AccordionModule,
    NgApexchartsModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    RadioButtonModule,
    TableModule,
    ToolbarModule,
    CheckboxModule,
    FormsModule,
    MultiSelectModule,
    CalendarModule,
    TabViewModule
  ],
  providers: [],
})
export class CabinetModule {}
