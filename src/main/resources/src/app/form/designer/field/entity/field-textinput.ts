import { FieldBase } from './field-base';

export class FieldTextInput extends FieldBase<string> {

  type = 'textinput';

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}
