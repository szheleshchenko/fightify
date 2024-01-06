import {Component} from '@angular/core';
import {HomeOverviewComponent} from '@libs/shared/features/home-overview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePageComponent {}
