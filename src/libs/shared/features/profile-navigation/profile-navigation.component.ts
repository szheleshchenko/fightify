import {Component} from '@angular/core';
import {DropdownComponent} from '@libs/shared/ui/ui-kit/dropdown';

@Component({
  selector: 'app-profile-navigation',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
})
export class ProfileNavigationComponent {}
