import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeFormComponent } from 'src/app/components/employee-form/employee-form.component';
import { TableComponent } from "../../../components/table/table.component";

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}


@Component({
  selector: 'admin-employees',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TableComponent
],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminEmployeesComponent {
  
 }
