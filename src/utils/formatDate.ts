export default function formatDate(date: Date) {
  const current = new Date(date);
  const dataAzi = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return dataAzi;
}
