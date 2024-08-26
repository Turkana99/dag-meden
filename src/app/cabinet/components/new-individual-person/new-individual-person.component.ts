import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-individual-person',
  templateUrl: './new-individual-person.component.html',
  styleUrls: ['./new-individual-person.component.scss'],
})
export class NewIndividualPersonComponent implements OnInit {
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
    this.addInput(); // Add an initial phone number field
    this.addAddressBlock(); // Add an initial address block
  }

  initForm() {
    this.individualPersonForm = this.fb.group({
      fin: ['', Validators.required],
      inputs: this.fb.array([]),
      addresses: this.fb.array([]),
    });

    this.legalPersonForm = this.fb.group({
      inputsLeg: this.fb.array([]),
      addressesLeg: this.fb.array([]),
    });
  }

  get inputs(): FormArray {
    return this.individualPersonForm.get('inputs') as FormArray;
  }

  get addresses(): FormArray {
    return this.individualPersonForm.get('addresses') as FormArray;
  }

  get inputsLeg(): FormArray {
    return this.legalPersonForm.get('inputsLeg') as FormArray;
  }

  get addressesLeg(): FormArray {
    return this.legalPersonForm.get('addressesLeg') as FormArray;
  }


  addInput() {
    const inputGroup = this.fb.group({
      selectedType: [null, Validators.required],
      value: ['', Validators.required],
    });
    this.inputs.push(inputGroup);
  }

  addInputLeg() {
    const inputGroup = this.fb.group({
      selectedType: [null, Validators.required],
      value: ['', Validators.required],
    });
    this.inputsLeg.push(inputGroup);
  }

  removeInput(index: number) {
    if (this.inputs.length > 1) {
      this.inputs.removeAt(index);
    }
  }

  removeInputLeg(index: number) {
    if (this.inputsLeg.length > 1) {
      this.inputsLeg.removeAt(index);
    }
  }

  addAddressBlock() {
    const addressGroup = this.fb.group({
      addressType: [null, Validators.required],
      city: [null, Validators.required],
      street: ['', Validators.required],
      village: [null],
      building: ['', Validators.required],
      postalCode: ['', Validators.required],
      apartment: ['', Validators.required],
      active: [false],
    });
    this.addresses.push(addressGroup);
  }

  removeAddressBlock(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }

  onSubmit() {
    if (this.individualPersonForm.valid) {
      console.log('Form Submitted:', this.individualPersonForm.value);
    }
  }
}
