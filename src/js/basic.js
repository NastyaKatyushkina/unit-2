export default function healthSort(data) {
  data.sort((a, b) => (a.health < b.health ? 1 : -1));
  return data;
}
