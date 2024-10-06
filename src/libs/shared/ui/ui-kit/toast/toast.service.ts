import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {inject, Injectable} from '@angular/core';
import {ToastComponent} from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly overlay = inject(Overlay);
  private overlayRef?: OverlayRef;

  public show({
    title,
    description,
    duration = 3000,
  }: {
    title: string;
    description?: string;
    duration?: number;
  }): void {
    const positionStrategy = this.overlay.position().global().bottom('20px').left('20px');

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false,
    });

    const toastPortal = new ComponentPortal(ToastComponent);
    const toastComponentRef = this.overlayRef.attach(toastPortal);

    toastComponentRef.instance.title.set(title);
    toastComponentRef.instance.description.set(description);

    setTimeout(() => {
      toastComponentRef.instance.hide();
      setTimeout(() => this.dismiss(), 500);
    }, duration);
  }

  dismiss() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = undefined;
    }
  }
}
