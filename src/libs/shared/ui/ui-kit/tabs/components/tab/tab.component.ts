import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  public label = input.required<string>();
  public active = signal<boolean>(false);
  public disabled = signal<boolean>(false);
}
