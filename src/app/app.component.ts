import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private title: Title, private router: Router) {
  }

  /**
   * Responsible for updating title, depending of which route
   * we are currently on
   */
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof RoutesRecognized),
      map((event: RoutesRecognized) => {
        if (event.url === '/admin') {
          return event.state.root.firstChild.data;
        } else {
          return event.state.root.firstChild.firstChild.data;
        }
      })
    ).subscribe(data => {
      this.title.setTitle(data.title);
    });
  }

}
