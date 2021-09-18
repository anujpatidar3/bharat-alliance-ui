import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../../service/public.service';
@Component({
  selector: 'app-get-consultation',
  templateUrl: './get-consultation.component.html',
  styleUrls: ['./get-consultation.component.scss']
})
export class GetConsultationComponent implements OnInit {

  showButton=true;
  showError=true;
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private publicService: PublicService) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  get f() { return this.form.controls; }

  initialiseForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    });


    this.publicService.test().subscribe(
      data => {
        console.log('get api' ,data)
      },
      error => {
       console.log('get api error' ,error)
      });
  }
  reset() {
    this.submitted = false;
    this.loading = false;
    this.form.reset();
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.showButton=false;
    const FORMVALUE=this.form.value;
    const EMAILDATA = {
      "Name": FORMVALUE.name,
      "ContactNumber": FORMVALUE.mobile,
      "Email": FORMVALUE.email,
      "Address": FORMVALUE.city+'___'+FORMVALUE.zip
    };

    this.publicService.SendEnquiry(EMAILDATA).subscribe(
      data => {
        this.showButton=true;
        this.form.reset();
        this.initialiseForm();
        this.submitted=false;
      },
      error => {
        this.showButton=true;
        this.form.reset();
        this.initialiseForm();
        this.submitted=false;
      });
  }

  resetform(){
    
  }

}
