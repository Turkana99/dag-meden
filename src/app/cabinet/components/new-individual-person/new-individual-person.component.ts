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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.addInput(); // Add an initial field
  }

  initForm() {
    this.individualPersonForm = this.fb.group({
      fin: ['', Validators.required],
      inputs: this.fb.array([]),
    });
    this.legalPersonForm = this.fb.group({
      fin: ['', Validators.required],
    });
  }

  get inputs(): FormArray {
    return this.individualPersonForm.get('inputs') as FormArray;
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
}