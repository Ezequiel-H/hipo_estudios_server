/* eslint-disable camelcase */
export const mapCenter = ({
  name,
  address,
  number,
  address_details,
  city,
  country,
  email,
  phones,
  studies,
}) => ({
  name,
  address,
  number,
  address_details,
  city,
  country,
  email,
  phones: phones || [],
  studies: studies || [],
});

export const a = 2;
