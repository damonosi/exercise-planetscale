export default function getTodayDate() {
  const current = new Date();
  const dataAzi = `${current.getDate()} . ${
    current.getMonth() + 1
  } . ${current.getFullYear()}`;
  return dataAzi;
}
