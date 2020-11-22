export const ValidateEmail = (email: string) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return true;
  }
  return false;
};

export const firstCharUpperCase = (str: string): string => {
  if (str) {
    const char1 = str[0].toUpperCase();
    const lastCharts = str.substr(1);
    return char1 + lastCharts;
  }
  return '';
};
