import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'admin-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogActions,
    MatDialogModule
  ],
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent implements OnInit {
  country: Food[] = [
    { value: 'steak-0', viewValue: 'USA' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  state: Food[] = [
    { value: 'steak-0', viewValue: 'Cuba' },
    { value: 'pizza-1', viewValue: 'Djibouti' },
    { value: 'tacos-2', viewValue: 'Bulgaria' },
    { value: 'tacos-3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;


  constructor(
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/countries')
      .subscribe((response) => {
        console.log(response);
      });
  }

  
  
  async onSubmit() {
    setTimeout(() => {
      this.dialogRef.close('Form submitted');
    }, 3000);
  }
}
