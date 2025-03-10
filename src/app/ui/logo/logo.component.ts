import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="flex items-center gap-2" role="presentation">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28px"
        height="28px"
        viewBox="0 0 72 72"
        id="emoji"
        class="dark:invert"
      >
        <g id="color" />
        <g id="line">
          <path
            stroke="#000000"
            stroke-width="2"
            d="M24.3164 9.79341C24.6915 9.41833 25.2002 9.20762 25.7306 9.20762L46.2694 9.20762C46.7998 9.20762 47.3085 9.41833 47.6836 9.79341L62.2067 24.3165C62.5818 24.6916 62.7925 25.2003 62.7925 25.7307L62.7925 46.2695C62.7925 46.7999 62.5818 47.3086 62.2067 47.6837L47.6836 62.2068C47.3085 62.5819 46.7998 62.7926 46.2694 62.7926L25.7306 62.7926C25.2002 62.7926 24.6915 62.5819 24.3164 62.2068L9.7933 47.6837C9.41823 47.3086 9.20751 46.7999 9.20751 46.2695L9.20751 25.7307C9.20751 25.2003 9.41823 24.6916 9.7933 24.3165L24.3164 9.79341Z"
          />
        </g>
      </svg>
      <div class="text-xs leading-none font-bold">
        <p>super-</p>
        <p>necessary.com</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
