import {Component, OnInit, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  template: '',
})
export class LogoutPageComponent implements OnInit {
  private router = inject(Router);

  public ngOnInit(): void {
    this.router.navigate(['/']);
  }
}
