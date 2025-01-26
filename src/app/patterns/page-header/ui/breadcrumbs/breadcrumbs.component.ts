import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MenuItem} from '@core/types/menu-item';
import {TranslocoDirective} from '@jsverse/transloco';
import {map} from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, TranslocoDirective],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly breadcrumbs = toSignal(
    this.#activatedRoute.data.pipe(map(() => this.#createBreadcrumbs(this.#activatedRoute))),
  );

  #createBreadcrumbs(route: ActivatedRoute): Array<MenuItem> {
    const breadcrumbs: Array<MenuItem> = [];
    let child: ActivatedRoute | null = route;

    while (child) {
      const label = child.snapshot.data['label'];

      if (label) {
        breadcrumbs.unshift({
          path: child.snapshot.url.map((segment) => segment.path).join('/'),
          label,
        });

        child = child.parent;
      } else {
        child = null;
      }
    }

    return breadcrumbs;
  }
}
