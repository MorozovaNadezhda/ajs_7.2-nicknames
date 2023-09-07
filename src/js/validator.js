export default function validatesPhoneNumbers(number) {
  const regexp = /(\+?\d*)/g;
  const filteredNum = number.match(regexp).filter((e) => e && e);
  if (!filteredNum[0].includes('+')) {
    filteredNum[0] = filteredNum[0].replace(/(7|8)/, '+7');
  }
  return filteredNum.join('');
}
