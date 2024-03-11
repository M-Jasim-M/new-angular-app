
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // @Input() khan: string = '';
  show = true;

  isOut = false;

  toggleInOut(): void {
    alert("this will works")
    this.isOut = !this.isOut;
  }




  @Output() formSubmitted = new EventEmitter<any>();

  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}
  responseMessage: string = '';
  submitForm() {
    // Assuming your server is running on http://localhost:3000
    const apiUrl = 'http://localhost:3000/api/submitForm';

    // Send the form data to the server using HTTP POST
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        alert("this will works")
        this.formSubmitted.emit(response);
        const responseString = JSON.stringify(response);
        this.responseMessage = 'Form submission successful: ' + responseString;
        alert('Form submission successful: ' + responseString);
      },
      (error) => {
        console.error('Form submission failed:', error);
      }
    );
  }
}