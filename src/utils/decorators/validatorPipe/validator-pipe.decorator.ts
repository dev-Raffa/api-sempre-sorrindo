import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
  Type
} from '@nestjs/common';

type validatorPipe = {
  createDTO: Type<any>;
  updateDTO: Type<any>;
};

export function ValidatorPiPe<T extends { new (...args: any[]): object }>(
  args: validatorPipe
) {
  return (target: T) => {
    return class extends target implements PipeTransform {
      async transform(value: any, metadata: ArgumentMetadata) {
        let errors: [] = [];
        if (metadata.type === 'body' && metadata.data !== 'undefined') {
          const DTO = await this.getDTO(metadata.data);
          try {
            errors = new DTO(value).getValidatorErrors();
          } catch (e) {
            return value;
          }
        } else {
          try {
            errors = new metadata.metatype(value).getErrors();
          } catch (e) {
            return value;
          }
        }

        errors.length > 0 && this.throwError(errors);

        return value;
      }

      async getDTO(name: string) {
        return name === 'create' ? args.createDTO : args.updateDTO;
      }

      throwError(errors: any[]) {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Bad Request',
            cause: errors
          },
          HttpStatus.BAD_REQUEST
        );
      }
    };
  };
}
