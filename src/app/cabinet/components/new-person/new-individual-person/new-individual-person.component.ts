import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-individual-person',
  templateUrl: './new-individual-person.component.html',
  styleUrls: ['./new-individual-person.component.scss'],
})
export class NewIndividualPersonComponent implements OnInit {
  individualPersonForm: any;
  selectedPerson: string = 'individual-person';
  inception = [
    {
      name: 'Neft və qazçıxarma sənayesində işlərin təhlükəsiz görülməsinə nəzarət müfəttişliyi',
    },
    { name: 'test2' },
  ];
  acType = [{ name: 'Əsas' }, { name: 'Digər' }];
  acType2 = [
    { name: 'Ali təhsil' },
    { name: 'Aqrokimyəvi məhsulların istehsalı' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.individualPersonForm = this.fb.group({
      fin: ['', Validators.required],
    });
  }

}
