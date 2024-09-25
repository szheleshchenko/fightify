import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {FeatureId} from '../enums';
import {FeatureFlagService} from '../feature-flags.service';

@Directive({
  selector: '[appFeatureFlag]',
})
export class FeatureFlagDirective<T> {
  public readonly featureId = input.required<FeatureId>();
  private templateRef = inject<TemplateRef<T>>(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private featureFlagService = inject(FeatureFlagService);

  constructor() {
    effect(() => {
      if (!this.featureFlagService.hasFeature(this.featureId())) {
        throw new Error(`Feature ID ${this.featureId} is not provided in FeatureFlagsService`);
      }

      if (this.featureFlagService.isFeatureEnabled(this.featureId())) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
