import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoleDirective } from "../core/directives/auth-role.directive";

@NgModule({
  declarations: [AuthRoleDirective],
  imports: [
    CommonModule,
  ],
  exports:[
    AuthRoleDirective
  ]
})
export class SharedModule { }
