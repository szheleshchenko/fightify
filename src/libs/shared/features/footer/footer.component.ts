import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {TemplateLink, injectAppLinks} from '../app-links';
import {LogoComponent} from '../logo';
import {PostCardComponent} from '../post-card';
import {FooterResourcesListComponent} from './components/resources-list';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [
    RouterLink,
    LogoComponent,
    TranslocoDirective,
    FooterResourcesListComponent,
    PostCardComponent,
  ],
  templateUrl: 'footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public appLinks = injectAppLinks();

  public resources: Array<TemplateLink> = [
    {
      translationKey: 'TEXT_NEWS',
      path: this.appLinks.news,
    },
    {
      translationKey: 'TEXT_EVENTS',
      path: this.appLinks.events,
    },
    {
      translationKey: 'TEXT_FIGHTERS',
      path: this.appLinks.fighters,
    },
    {
      translationKey: 'TEXT_LEADERBOARD',
      path: this.appLinks.leaderboard,
    },
    {
      translationKey: 'TEXT_FORUM',
      path: this.appLinks.forum,
    },
  ];

  public usefulLinks: Array<TemplateLink> = [
    {
      translationKey: 'TEXT_ABOUT',
      path: '/about',
    },
    {
      translationKey: 'TEXT_CONTACT_US',
      path: '/contact-us',
    },
    {
      translationKey: 'TEXT_FEEDBACK',
      path: '/feedback',
    },
  ];
}
