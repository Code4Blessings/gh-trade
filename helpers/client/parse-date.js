/**
 * converts dates to Turkish and make more human readable
 */

function convertDate(isoDate) {
  const days = [
    "Pazar",
    "Cumartesi",
    "Cuma",
    "Perşembe",
    "Çarşamba",
    "Salı",
    "Pazartesi"
  ];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ];
  const date = new Date(isoDate);
  const dayOfTheMonth = date.getDate();
  const dayOfTheWeek = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${dayOfTheMonth}-${months[month]}-${year} ${days[dayOfTheWeek]}`;
}

export default convertDate;
