import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from './content-pages-routing.module';

import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';
import { ErrorPageComponent } from './error/error-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { LockScreenPageComponent } from './lock-screen/lock-screen-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { MaterialModule } from 'app/materialAngular/material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        RegisterPageComponent,
        WelcomeComponent
    ]
})
export class ContentPagesModule { }
