import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Login2Component } from './login2/login2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RouterLink, NgbModule,CommonModule,Login2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app title';
  alert1(jasim:string){
    alert("this will works" + jasim)
  }
}
