
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fieldSize' })
export class FieldSizePipe implements PipeTransform {
    transform(size: number) {
        if (size) {
            return 24 / size;
        }else{
            return 24;
        }
    }
}
