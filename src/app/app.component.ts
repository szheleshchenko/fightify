import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '@libs/shared/features/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: 'app.html',
  styleUrls: ['app.scss'],
})
export class AppComponent {}
