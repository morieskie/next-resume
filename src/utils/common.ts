export const trimLeft = (str: string, char: string) => {
  if (str.startsWith(char)) {
    return str.slice(1);
  }
  return str;
};
export const trimRight = (str: string, char: string) => {
  if (str.endsWith(char)) {
    return str.slice(0, str.length - 2);
  }
  return str;
};
