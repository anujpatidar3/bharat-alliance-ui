import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-consultation',
  templateUrl: './get-consultation.component.html',
  styleUrls: ['./get-consultation.component.scss']
})
export class GetConsultationComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  get f() { return this.form.controls; }

  initialiseForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });
  }
  reset(){
    this.submitted=false;
    this.loading=false;
    this.form.reset();
  }

  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value)
  }

}
