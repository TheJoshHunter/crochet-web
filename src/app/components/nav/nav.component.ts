import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    
  }

}
