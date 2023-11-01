const getRandomLetters = (length = 1) =>
  Array(length)
    .fill(1)
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
    .join('');
const getRandomDigits = (length = 1) =>
  Array(length)
    .fill(1)
    .map(() => Math.floor(Math.random() * 10))
    .join('');

export const generateUniqueID = (existingIDs: string[]) => {
  let id =
    getRandomDigits(2) +
    getRandomLetters(2) +
    getRandomDigits(2) +
    getRandomLetters(1) +
    getRandomDigits(2);
  while (existingIDs.includes(id))
    id =
      getRandomDigits(2) +
      getRandomLetters(2) +
      getRandomDigits(2) +
      getRandomLetters(1) +
      getRandomDigits(2);
  return id.toLowerCase();
};
