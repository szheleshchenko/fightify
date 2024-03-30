import {Component} from '@angular/core';
import {ContentCardComponent, TableComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-overview',
  standalone: true,
  imports: [ContentCardComponent, TableComponent],
  templateUrl: './fighter-overview.component.html',
  styleUrl: './fighter-overview.component.scss',
})
export class FighterOverviewComponent {}
