export const patterns = {
  username: /[0-9a-zA-Z]{4,20}$/,
  name: /[a-zA-Z]{4,20}$/,
  email: /^([\w.]{4,20})+@([\w-]+\.)+[\w-]{2,4}$/,
  birthday: /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
  country: /^((?!default).)*$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

export type TypeErrorMessages = {
  empty: string;
  short: string;
  long: string;
  wrong: string;
  required: string;
  pattern: string;
};

export const errorMessages: TypeErrorMessages = {
  empty: '* Field should not be empty',
  short: '* Too short value',
  long: '* Too long value',
  wrong: '* Wrong value',
  required: '* This field is required',
  pattern: '* Field not valid',
};
