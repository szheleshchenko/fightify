import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '@libs/shared/features/header';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageComponent {}
