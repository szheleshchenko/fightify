import {Directive, input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {FeatureId} from '../enums';
import {FeatureFlagService} from '../feature-flags.service';

@Directive({
  selector: '[appFeatureFlag]',
})
export class FeatureFlagDirective<T> implements OnChanges {
  public readonly featureId = input.required<FeatureId>();

  constructor(
    private templateRef: TemplateRef<T>,
    private viewContainerRef: ViewContainerRef,
    private featureFlagService: FeatureFlagService,
  ) {}

  public ngOnChanges(): void {
    if (!this.featureFlagService.hasFeature(this.featureId())) {
      throw new Error(`Feature ID ${this.featureId} is not provided in FeatureFlagService`);
    }

    if (this.featureFlagService.isFeatureEnabled(this.featureId())) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
