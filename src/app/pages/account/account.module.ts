import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgSharedModule } from 'src/app/shared/primeng.shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PrimeNgSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
