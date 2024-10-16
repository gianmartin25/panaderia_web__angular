import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'admin-products',
  standalone: true,
  imports: [
    TableComponent,
    MaterialModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly dialog = inject(MatDialog)
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {

    this.dialog.open(ProductFormComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
