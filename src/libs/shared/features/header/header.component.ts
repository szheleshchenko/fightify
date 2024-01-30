import {DOCUMENT} from '@angular/common';
import {Component, Input, OnInit, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NavigationStart, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {TranslocoDirective} from '@ngneat/transloco';
import {filter} from 'rxjs';
import {HeaderLink} from './types';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslocoDirective,
    TextFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() links!: Array<HeaderLink>;

  public router = inject(Router);
  public document = inject(DOCUMENT);
  public inputControl = new FormControl<boolean>(false);

  public ngOnInit(): void {
    this.inputControl.valueChanges.subscribe((value) => {
      const className = 'header-open';

      if (value) {
        this.document.body.classList.add(className);
      } else {
        this.document.body.classList.remove(className);
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.inputControl.setValue(false));
  }
}
