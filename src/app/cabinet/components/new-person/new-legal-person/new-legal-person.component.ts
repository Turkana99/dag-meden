import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-legal-person',
  templateUrl: './new-legal-person.component.html',
  styleUrls: ['./new-legal-person.component.scss'],
})
export class NewLegalPersonComponent implements OnInit {
  individualPersonForm: any;
  legalPersonForm: any;
  selectedPerson: string = 'individual-person';
  numberType = [{ name: 'Otaq nömrəsi' }, { name: 'Faks' }];
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
  addType = [{ name: 'Qeydiyyat ünvanı' }, { name: 'Fakttiki yaşayış ünvanı' }];
  cities = [{ name: 'Bakı' }, { name: 'Sumqayıt' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.legalPersonForm = this.fb.group({
    });
  }

}
