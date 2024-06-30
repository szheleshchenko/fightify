import {InjectionToken, ValueProvider} from '@angular/core';
import {NavigationLinks} from '../types';

export const AppLinks = new InjectionToken<NavigationLinks>('App Links');

export function provideAppLinks(links: NavigationLinks): ValueProvider {
  return {provide: AppLinks, useValue: links};
}
