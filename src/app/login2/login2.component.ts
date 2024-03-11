// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component{}
// export class Login2Component implements OnInit {
//   myForm!: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.myForm.valid) {
//       const formData = this.myForm.value;
//       this.http.post<any>('http://localhost:3000/api/submitForm', formData)
//         .subscribe(
//           response => {
//             // Handle successful login response
//             console.log('Login successful:', response);
//           },
//           error => {
//             // Handle login error
//             console.error('Login error:', error);
//           }
//         );
//     }
//   }
// }