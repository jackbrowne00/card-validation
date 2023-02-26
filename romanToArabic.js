const romanToArabic = (a) => {
  let sum = 0;

  const dictionary = {
    M: 1000,
    CM: 900,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  if (a === undefined) return "ERROR!!";
  while (a.length > 0) {
    for (const i in dictionary) {
      if (a.startsWith(i)) {
        sum += dictionary[i];
        a = a.slice(i.length);
      }
    }
  }
  return sum;
};

export default romanToArabic;
