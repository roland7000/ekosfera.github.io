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
  
  const regex = !isEmail ? REGEXP_NAME : REGEXP_EMAIL
  const val = isEmail ? value.toLowerCase() : value;

  return regex.test(val);
}
