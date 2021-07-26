import { Directive, OnInit, isDevMode, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Role } from '../models/role.models';

@Directive({
  selector: '[appAuthRole]'
})
export class AuthRoleDirective implements OnInit {

  constructor(private authService: AuthService,
    private templeRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  authRoles: string[] = [];

  @Input()
  public set appAuthRole(roles: string[]) {
    if (roles && roles.length > 0) {
      this.authRoles = roles;
    }
  }

  ngOnInit(): void {
    let hasAccess = this.authRoles.some(role => this.authService.hasRole(role));

    if (hasAccess) {
      this.viewContainerRef.createEmbeddedView(this.templeRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }

}
