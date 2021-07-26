import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/services/auth.service";
import { User } from '../../core/models/auth.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  user: User | null = null;

  ngOnInit(): void {
    this.user = this.authService.currentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
