import { errorMessages } from '../../../form-constants';

export const TextError = (type: string) => {
  switch (type) {
    case 'required':
      return errorMessages.empty;
    case 'minLength':
      return errorMessages.short;
    case 'maxLength':
      return errorMessages.long;
    case 'pattern':
      return errorMessages.wrong;
    default:
      return errorMessages.wrong;
  }
};
