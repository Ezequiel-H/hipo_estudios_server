import { parseDate } from '../utils/date.js';

export const mapPatient = ({
  name,
  surname,
  birthdate,
  os,
  numeroAfiliado,
  studies,
}) => ({
  name,
  surname,
  birthdate: parseDate(birthdate),
  os,
  numeroAfiliado,
  studies,
});

export const a = 2;
