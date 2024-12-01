import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-account-access',
  imports: [RouterOutlet],
  templateUrl: './account-access.component.html',
  styleUrl: './account-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountAccessPageComponent {}
