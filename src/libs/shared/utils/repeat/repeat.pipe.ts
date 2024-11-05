import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'repeat',
  standalone: true,
})
export class RepeatPipe implements PipeTransform {
  transform(length: number, startAt: number = 0): Array<number> {
    return Array.from({length}, (_, index) => index + startAt);
  }
}
