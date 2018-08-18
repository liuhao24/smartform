import { FieldBase } from './field-base';

export class FieldTextInput extends FieldBase<string> {
  controlType = 'textinput';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
