import {FormControl} from '@angular/forms';

export type InferFormSchema<T> = {[K in keyof T]: FormControl<T[K] | null>};
