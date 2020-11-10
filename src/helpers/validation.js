import {
  REGEXP_NAME,
  REGEXP_EMAIL,
  FIELD_TYPE_NAME,
  FIELD_TYPE_EMAIL
} from '../constants';

export const validateField = ({ type, value }) => {
  const isEmail = type === FIELD_TYPE_EMAIL;
  const isName = type === FIELD_TYPE_NAME;

  if (!type || !value || !isEmail && !isName) return null;
  const val = isEmail ? value.toLowerCase() : value;

  if (isEmail) {
    return REGEXP_EMAIL.test(val);
  } else {
    return true
    // return REGEXP_NAME.test(val)
  }
}
