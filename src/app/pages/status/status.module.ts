import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { PrimeNgSharedModule } from 'src/app/shared/primeng.shared.module';


@NgModule({
  declarations: [NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    PrimeNgSharedModule
  ]
})
export class StatusModule { }
