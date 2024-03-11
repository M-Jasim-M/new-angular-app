import { RouterOutlet, Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        component:Login2Component,
        path: 'login'
    },
    {
        component:LoginComponent,
        path:''
    }
   
];

