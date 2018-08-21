import { FieldBase } from './field-base';

export class FieldTextArea extends FieldBase<string> {

  type = 'textarea';

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}
