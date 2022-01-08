// Note: function is written as inclusive with minimum and maxmimum
export const generateRandomInteger = (minimum : number, maximum: number) : number => {
  return Math.floor(minimum + (Math.random() * maximum));
};