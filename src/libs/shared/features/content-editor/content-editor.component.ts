import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, NgControl} from '@angular/forms';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-content-editor',
  standalone: false,
  templateUrl: './content-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentEditorComponent
  extends BaseFormControlDirective<string | null>
  implements OnInit, OnDestroy
{
  readonly label = input<string>('');
  private readonly document = inject(DOCUMENT);
  public ngControl = inject(NgControl);
  public formControl!: FormControl;

  constructor() {
    super();

    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;

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
