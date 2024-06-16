import { parseDate } from '../utils/date.js';

export const mapPatient = ({
  email,
  password,
  name,
  surname,
  birthdate,
  os,
  numeroAfiliado,
  country,
  phone,
}) => ({
  email,
  password,
  name,
  surname,
  birthdate: birthdate ? parseDate(birthdate) : '',
  os,
  numeroAfiliado,
  country,
  phone,
  studies: [],
});

export const a = 2;
