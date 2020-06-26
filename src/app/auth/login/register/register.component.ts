import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;
  
  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

 

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],

    });
  }

  ngOnInit(): void {}
}