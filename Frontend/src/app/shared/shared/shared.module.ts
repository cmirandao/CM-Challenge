import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TableModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    DialogModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    ConfirmDialogModule,
    DatePipe,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputGroupModule,
    InputGroupAddonModule,
    DividerModule,
    FileUploadModule,
    InputMaskModule,
    TabViewModule,
    CardModule,
    FieldsetModule,
    SidebarModule,
    DataViewModule,
    FloatLabelModule,
    CalendarModule
  ]
})
export class SharedModule { }
