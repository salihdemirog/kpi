import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private eventService: EventService) { }

  pageHeading!: string;

  ngOnInit(): void {
    this.eventService.subscribe('changePageHeading', (heading) => {
      this.pageHeading = heading;
    });
  }

}
