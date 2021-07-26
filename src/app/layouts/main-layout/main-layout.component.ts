import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/models/role.models';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }
  isCollapsed:boolean=false;
  ngOnInit(): void {
  }

}
