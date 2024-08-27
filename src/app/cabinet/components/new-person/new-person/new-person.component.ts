import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss'],
})
export class NewPersonComponent {
  selectedPerson: string = 'individual-person';
  numberType = [{ name: 'Otaq nömrəsi' }, { name: 'Faks' }];
  addType = [{ name: 'Qeydiyyat ünvanı' }, { name: 'Fakttiki yaşayış ünvanı' }];
  cities = [{ name: 'Bakı' }, { name: 'Sumqayıt' }];
  phoneForm: any;
  addressForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.addInput();
    this.addAddressBlock();
  }

  initForm() {
    this.phoneForm = this.fb.group({
      inputs: this.fb.array([]),
    });

    this.addressForm = this.fb.group({
      addresses: this.fb.array([]),
    });
  }

  get inputs(): FormArray {
    return this.phoneForm.get('inputs') as FormArray;
  }

  get addresses(): FormArray {
    return this.addressForm.get('addresses') as FormArray;
  }

  addInput() {
    const inputGroup = this.fb.group({
      selectedType: [null, Validators.required],
      value: ['', Validators.required],
    });
    this.inputs.push(inputGroup);
  }

  removeInput(index: number) {
    if (this.inputs.length > 1) {
      this.inputs.removeAt(index);
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
    });
    this.addresses.push(addressGroup);
  }

  removeAddressBlock(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }
}
