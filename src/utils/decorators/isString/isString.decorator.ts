import { Validate } from '../validate/validate.decorator';
import { StringValidator } from '../../validators/string/string.validator';
import { stringValidatorArgs } from '../../types/stringValidtorArgs/stringValidatorArgs.type';

interface isStringDecorator extends Pick<stringValidatorArgs, 'options'> {
  errorMsg: string;
  nullable: boolean;
}

export function isString(args?: Partial<isStringDecorator>) {
  const defaultErrorMsg: string =
    args.options.minLength && args.options.maxLength
      ? `The text should contain more than ${args.options.minLength - 1} characters and fewer than ${args.options.maxLength + 1} characters`
      : args.options.minLength
        ? `the text should contain more than ${args.options.minLength - 1} characters`
        : args.options.maxLength &&
          `the text should contain fewer than ${args.options.maxLength + 1} characters`;

  return Validate<isStringDecorator>(new StringValidator(), {
    errorMsg: args.errorMsg || defaultErrorMsg,
    nullable: args.nullable || false,
    options: {
      minLength: args.options.minLength,
      maxLength: args.options.maxLength
    }
  });
}
