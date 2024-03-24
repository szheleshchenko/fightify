import {Component} from '@angular/core';
import {FighterCardComponent} from '@libs/fighter/features/fighter-card';

@Component({
  selector: 'app-fighters-list',
  standalone: true,
  imports: [FighterCardComponent],
  templateUrl: './fighters-list.component.html',
  styleUrl: './fighters-list.component.scss',
})
export class FightersListComponent {}
