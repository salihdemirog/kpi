import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgSharedModule } from '../shared/primeng.shared.module';

@NgModule({
  declarations: [MainLayoutComponent, SidebarComponent, HeaderComponent, LoggedUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgSharedModule,
    SharedModule
  ],
  exports:[
    
  ]
})
export class LayoutsModule { }
