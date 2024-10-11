import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentEditorComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);

  public ngOnInit(): void {
    const linkElement = this.document.createElement('link');
    linkElement.id = 'quill-styles';
    linkElement.href = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css';
    linkElement.rel = 'stylesheet';

    this.document.head.append(linkElement);
  }

  public ngOnDestroy(): void {
    const linkElement = this.document.head.querySelector('#quill-styles');

    if (linkElement) {
      linkElement.remove();
    }
  }
}
